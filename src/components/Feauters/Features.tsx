import { MotionTransition } from "../MotionTranstion";
import { dataFeauters } from "./Features.data";

import Image from "next/image";
export function Features() {
  return (
    <section
      id="capacidades"
      className="grid grid-cols-2 gap-16 my-20 md:grid-cols-4 md:py-56"
    >
      <section>
        <h2 className="mb-4 text-3xl font-bold">
          Este es un texto de referencia
          <span className="text-pink-400"> Mejores que otros</span>
        </h2>
      </section>
      {dataFeauters.map(({ id, image, text, additionalClass }) => (
        <MotionTransition key={id}>
          <section key={id}>
            <section
              className={`rounded-3xl shadow-lg p-6 shadow-purple-500 ${additionalClass}`}
            >
              <Image
                src={`/assets/${image}.png`}
                alt={text}
                width="100"
                height="100"
              />
              <h3 className="mt-3 mr-10 text-2xl font-bold">{text}</h3>
            </section>
          </section>
        </MotionTransition>
      ))}
    </section>
  );
}
