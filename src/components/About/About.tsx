import { MotionTransition } from "../MotionTranstion";
import Image from "next/image";
export function About() {
  return (
    <div id="sobremi" className="grid items-center py-20 md:grid-cols-2 lg:py-56">

        <MotionTransition>
            <Image src="/assets/about.png" alt = "imagen sobre mi" width="600" height="400"/>
        </MotionTransition>
        <div className="md: pr-20 ">
            <h2 className="mb-10 text-4xl font-extrabold">Hemos estado <br /> <span className="text-pink-400"> Mejorando nuestro producto</span> durante años</h2>
            <p className="mb-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae architecto ea fugit veniam, eveniet quae exercitationem rerum quod dolorum non repellat! Accusantium officia nam doloremque temporibus saepe similique aperiam.</p>
            <button className="px-8 py-3 bg-pink-400 rounded-xl hover:bg-pink-500 text-white">Empieza ya</button>
        </div>
    </div>
  )
}
