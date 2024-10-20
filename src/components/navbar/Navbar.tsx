"use client"
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="grid items-center justify-between md:grid-cols-2 gap:4 md:gap-20 lg:px-20">
      <Image
        src="/assets/logo.png"
        alt="Logo tarredev"
        width="200"
        height="25"
        className="mx-auto md:mx-0"
      />
      <section className="flex gap-6 text-center justify-end  p-4">
        <Link
          href="#inicio"
          className=" hover:text-gray-300 transition-colors duration-300"
        >
          Inicio
        </Link>
        <Link
          href="#capacidades"
          className=" hover:text-gray-300 transition-colors duration-300"
        >
          Capacidades
        </Link>
        <Link
          href="#sobremi"
          className=" hover:text-gray-300 transition-colors duration-300"
        >
          Sobre mí
        </Link>
        <Link
          href="#practice"
          className=" hover:text-gray-300 transition-colors duration-300"
        >
          Práctica
        </Link>
        <Link
          href="#pricing"
          className=" hover:text-gray-300 transition-colors duration-300"
        >
          Planes
        </Link>
      </section>
    </nav>
  );
}
