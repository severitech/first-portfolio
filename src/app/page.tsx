import { Navbar } from "../components/navbar";
import { Overview } from "../components/overview";

export default function Home() {
  return <main className="px-3 lg:px-10">
    <Navbar />
    <Overview/>
  </main>;
}
