import "@/global.css";
import { countdown } from "@/helpers/countdown";
import Dashboard from "./Dashboard";

export default function HomeScreen() {
  setTimeout(() => {
    countdown();
  }, 200);
  return <Dashboard />;
}
