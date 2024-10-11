import { About } from "@/components/About";
import { Features } from "../components/Feauters";
import { Navbar } from "../components/navbar";
import { Overview } from "../components/overview";

export default function Home() {
  return <main className="px-3 lg:px-10">
    <Navbar />
    <Overview/>
    <Features/>
    <div className="max-w-6xl mx-auto">
        <About/>
    </div>
  </main>;
}
