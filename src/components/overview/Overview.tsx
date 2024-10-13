import { dataSocialNetworks } from "@/data/dataSocialNetWork";
import Link from "next/link";
import Image from "next/image";

export function Overview() {
  return (
    <div
      id="inicio"
      className="p-5 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-400 md:px-24 md:py-52 shadow-gray-500 shadow-lg"
    >
      <div className=" items-center md:grid md:grid-cols-2">
        <div>
          <h1 className=" text-6xl font-bold text-white md:leading-snug md:text-6xl">
            Desarrolla tus skill <br />
            para el futuro
          </h1>
          <p className="mt-5 text-white">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minima placeat doloremque nulla, laborum dolore animi laboriosam.
            Totam fuga repellat beatae cupiditate perspiciatis ea sunt illum
            neque illo! Possimus, tempora?
          </p>
          <div className="flex justify-start gap-4 my-10">
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
                  <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg `}>
                    {name}
                  </span>
                </Link>
            ))}
          </div>

          <div className="flex">
            <button className="text-white bg-pink-400 px-8 mr-10 py-3 rounded-xl   hover:bg-pink-500 transition-colors duration-400">
              Empieza ya
            </button>
            <button className="text-white border-2 px-8 mr-10 py-3 rounded-xl   hover:bg-white hover:text-pink-400 transition-colors duration-400">
              Cupon
            </button>
          </div>
        </div>
        <div className="grid justify-end md:mt-5">
          <Image
            src="/assets/overview.png"
            alt="overview"
            width="300"
            height="600"
          />
        </div>
      </div>
    </div>
  );
}
