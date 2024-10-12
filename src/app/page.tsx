import { About } from "@/components/About";
import { Features } from "../components/Feauters";
import { Navbar } from "../components/navbar";
import { Overview } from "../components/overview";
import { Practice } from "@/components/Practice";
import { Plans } from "@/components/Plans";

export default function Home() {
  return <div className="px-3 lg:px-10">
    <Navbar />
    <Overview/>
    <Features/>
    <div className="max-w-6xl mx-auto">
        <About/>
    </div>
    <Practice/>
    <Plans/>
  </div>;
}
