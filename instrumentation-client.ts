try {
  const savedTheme = localStorage.getItem("trip-board-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch {
  // Keep the default light theme when browser storage is unavailable.
}
