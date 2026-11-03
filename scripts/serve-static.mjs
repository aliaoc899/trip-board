import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 3001);
const outputDirectory = resolve(process.cwd(), "out");

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function resolveFile(urlPath) {
  const pathname = decodeURIComponent(urlPath.split("?")[0]);
  const relativePath = normalize(pathname).replace(/^[/\\]+/, "");
  let filePath = resolve(outputDirectory, relativePath || "index.html");

  if (filePath !== outputDirectory && !filePath.startsWith(`${outputDirectory}${sep}`)) {
    return null;
  }

  try {
    const fileStats = await stat(filePath);
    if (fileStats.isDirectory()) {
      filePath = join(filePath, "index.html");
      await stat(filePath);
    }
    return filePath;
  } catch {
    return null;
  }
}

const server = createServer(async (request, response) => {
  const filePath = await resolveFile(request.url ?? "/");
  const resolvedPath = filePath ?? join(outputDirectory, "404.html");

  try {
    const fileStats = await stat(resolvedPath);
    response.writeHead(filePath ? 200 : 404, {
      "Content-Length": fileStats.size,
      "Content-Type": contentTypes[extname(resolvedPath)] ?? "application/octet-stream",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(resolvedPath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Static export not found. Run npm run build first.\n");
  }
});

server.listen(port, host, () => {
  console.log(`Static Trip Board preview: http://${host}:${port}`);
});
