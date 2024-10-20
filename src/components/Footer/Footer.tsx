"use client";
import { dataSocialNetworks } from "@/data/dataSocialNetWork";
import Image from "next/image";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-5 pt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <section className="grid md:grid-cols-[450px_1fr_1fr_1fr] md:gap-10">
        <div>
          <Image
            src="/assets/logo.png"
            alt="Logo Web"
            className="w-24 md:w-48"
            width={240} 
            height={240}
          />
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            consequatur velit quasi quos doloremque et laboriosam porro eos
            eaque voluptatem, ea quas voluptates. Porro veritatis excepturi,
            illo culpa repellendus eius.
          </p>
        </div>

        <div className="my-3 col-span-3 ">
          <h4 className="text-xl font-bold text-white">Redes</h4>
          <div className="grid grid-cols-3 gap-4 mt-5">
            {dataSocialNetworks.map(({ id, icon, name, link }) => (
              <Link
                href={link}
                key={id}
                target="_blank"
                rel="noreferrer"
                className="relative group "
              >
                <Image
                  className={`transition-transform duration-300 ease-in-out hover:scale-110`}
                  src={`/svg/${icon}.svg`}
                  alt={name}
                  width="40"
                  height="40"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
