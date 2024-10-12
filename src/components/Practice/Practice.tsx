import React from "react";
import { MotionTransition } from "../MotionTranstion";
export function Practice() {
  return (
    <MotionTransition>
      <div id = "practice" className="grid items-center py-20 md:grid-cols-2 md:py-56">
        <div className="md:pr-20">
            <h2 className="mb-10 text-4xl font-extrabold">Puedes practicar a <br />Cualquier hora <span className=" text-pink-400">que se adapte a ti</span></h2>
            <p className="mb-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod natus placeat facere numquam quia tempora eaque cumque atque enim dignissimos voluptates, perspiciatis rem non autem. Commodi, iure. Quo, aperiam.</p>
            <button className="bg-pink-400 text-white px-8 py-4 rounded-xl hover:bg-pink-500" >Empieza Ya</button>
        </div>
        <video width="750" height="500" autoPlay muted loop >
            <source src="/assets/business.mp4" type ="video/mp4"/>

        </video>
      </div>
    </MotionTransition>
  );
}

