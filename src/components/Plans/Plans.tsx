"use client";
import { useState } from "react";
import { PricesPlans } from "./PricesPlans/PricesPlans";

export function Plans() {
  const [isMont, setIsMont] = useState(true);

  return (
    <div  className="py-20 md:py-56">
      <h2 id="pricing" className="text-4xl font-extrabold text-center">
        Aqui tienes todos <br />
        <span className="text-pink-400"> nuestros planes</span>
      </h2>
      <p  className="max-w-lg mx-auto mt-10 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        atque similique corrupti ratione obcaecati vero hic dignissimos dicta
        porro, labore quas odit officiis nam, maxime aliquam, voluptatem dolores
        praesentium. Dolorem!
      </p>
      <div  className="grid items-center justify-center max-w-sm grid-cols-3 mx-auto my-10 overflow-hidden">
        <span className="text-xl font-bold text-center">Mensual</span>
        <div className="flex justify-center">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-pink-400 rounded-full peer peer-focus:ring-indigo-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-pink-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"
              onClick={() => {
                setIsMont(!isMont);
              }}
            ></div>
          </label>
        </div>

        <span className="text-xl font-bold">Anual</span>
      </div>
      <PricesPlans isMontly={isMont} />
    </div>
  );
}
