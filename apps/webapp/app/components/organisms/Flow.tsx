import Image from 'next/image';
export default function Flow() {
  return (
    <div className="flex flex-col justify-between items-center py-12 px-8 sm:py-12 sm:px-10 lg:px-20">
      <p className="mb-12 font-bold text-xl text-justify md:text-center md:text-2xl lg:text-4xl">
        Evita caer en opciones más económicas que podrían no cumplir con tus
        necesidades
      </p>
      <p className="mb-12 lg:w-10/12 xl:w-6/12 text-justify sm:text-center">
        Elige soluciones de desarrollo que cuenten con los procesos y
        estructuras adecuados
      </p>
      <Image
        src="/assets/grafico-desktop.svg"
        width="0"
        height="0"
        className="hidden sm:flex w-auto"
        alt="Boosteriit"
        priority
        quality={100}
      />
      <Image
        src="/assets/grafico-mobile.svg"
        width="0"
        height="0"
        className="fle sm:hidden w-auto"
        alt="Boosteriit"
        priority
      />
    </div>
  );
}
