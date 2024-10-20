"use client";
import { About } from "@/components/About";
import { Features } from "../components/Feauters";
import { Navbar } from "../components/navbar";
import { Overview } from "../components/overview";
import { Practice } from "@/components/Practice";
import { Plans } from "@/components/Plans";
import { useState, useEffect } from "react";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O cualquier otro fallback mientras se carga en el cliente
  }
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
      <section className="max-w-6xl mx-auto">
        <About />
      </section>
      <Practice />
      <Plans />
    </main>
  );
}
