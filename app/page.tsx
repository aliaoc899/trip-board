import { TripBoard } from "@/components/trip-board";
import { trip } from "@/content/trip";

export default function Home() {
  return <TripBoard trip={trip} />;
}
