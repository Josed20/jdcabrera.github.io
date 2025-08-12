"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 mx-auto grid max-w-6xl items-center gap-6 md:gap-4 h-full p-6 py-16 md:py-0 md:grid-cols-2">
        
        {/* Imagen centrada y más pequeña */}
        <div className="flex justify-center">
          <Image
            src="/joseanime.png"
            priority
            width={340}
            height={510}
            alt="Avatar"
            className="h-auto w-full max-w-[340px] object-contain"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-8">
            Si puedes pensarlo, <br />
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-4 text-lg md:text-xl md:mx-0 md:mb-6">
            Como desarrollador frontend y Bakcreador de contenido, me dedico a
            combinar diseño y funcionalidad para crear experiencias digitales
            impactantes y accesibles.
          </p>

          {/* Botones */}
          <div className="flex items-center justify-center gap-4 md:justify-start md:gap-6">
            <a
              href="/projects"
              className="no-underline px-4 py-2 transition-all border-2 border-white text-white text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="no-underline px-4 py-2 transition-all border-2 border-orange-500 text-orange-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-orange-500 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
