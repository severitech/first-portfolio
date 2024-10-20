"use client"
import { MotionTransition } from "../MotionTranstion";
import Image from "next/image";
export function About() {
  return (
    <section
      id="sobremi"
      className="grid items-center py-20 md:grid-cols-2 lg:py-56"
    >
      <MotionTransition>
        <Image
          src="/assets/about.png"
          alt="imagen sobre mi"
          width="600"
          height="400"
        />
      </MotionTransition>
      <section className="md: pr-20 ">
        <h2 className="mb-10 text-4xl font-extrabold">
          Hemos estado <br />{" "}
          <p className="text-pink-400"> Mejorando nuestro producto</p>{" "}
          durante años
        </h2>
        <p className="mb-10">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          beatae architecto ea fugit veniam, eveniet quae exercitationem rerum
          quod dolorum non repellat! Accusantium officia nam doloremque
          temporibus saepe similique aperiam.
        </p>
        <button className="px-8 py-3 bg-pink-400 rounded-xl hover:bg-pink-500 transition-colors duration-400 text-white">
          Empieza ya
        </button>
      </section>
    </section>
  );
}
