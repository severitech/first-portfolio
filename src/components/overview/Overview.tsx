import { dataSocialNetworks } from "@/data/dataSocialNetWork";
import Image from "next/image";
import Link from "next/link";

export function Overview() {
  return (
    <div
      id="inicio"
      className="p-5 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-400 md:px-24 md:py-52"
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
          <div className=" flex justify-start gap-4 my-10">
            {dataSocialNetworks.map(({ id, icon, name, link }) => (
              <Link href={link} key={id} target="_blank" rel="noreferrer">
                <Image
                  src={`/svg/${icon}.svg`}
                  alt={name}
                  width="40"
                  height="40"
                ></Image>
              </Link>
            ))}
          </div>
          <div className="flex">
            <button className="text-white bg-pink-400 px-8 mr-10 py-3 rounded-xl   hover:bg-pink-600">Empieza ya</button>
            <button className="text-white border-2 px-8 mr-10 py-3 rounded-xl   hover:bg-white hover:text-pink-400 ">Cupon</button>
          </div>
        </div>
        <div className="grid justify-end">
          <Image
            src="/assets/overview.png"
            alt="overview"
            width="250"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
