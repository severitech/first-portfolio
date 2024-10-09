import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="grid items-center justify-between md:grid-cols-2 gap:4 md:gap-20 lg:px-20">
      <Image
        src="/assets/logo.png"
        alt="Logo tarredev"
        width="200"
        height="25"
        className="mx-auto md:mx-0"
      />
      <div className="flex gap-4 text-center justify-end">
        <Link href="#">Inicio</Link>
        <Link href="#">Capaciodades</Link>
        <Link href="#">Sobre mi</Link>
        <Link href="#">Contacto</Link>
      </div>
    </div>
  );
}
