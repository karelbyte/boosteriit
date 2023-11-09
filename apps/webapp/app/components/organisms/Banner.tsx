import Image from 'next/image';
import CreateNow from './CreateNow';
import { BsCheck2 } from 'react-icons/bs';

export default function Banner() {
  return (
    <div className="flex flex-col justify-between py-2 px-8 mt-24 md:flex-row sm:py-4 sm:px-10 lg:px-20">
      <div className="flex flex-col">
        <p className="text-2xl font-black mb-4 leading-[25px] lg:text-[32px] lg:leading-[32px] lg:w-4/5 xl:text-[43px] xl:leading-[45px] 2xl:w-3/4 2xl:text-[63px] 2xl:leading-[75px]">
          Soluciones tecnológicas para tu negocio
        </p>
        <div className="flex my-4 ml-2 items-start">
          <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
          <p className="ml-2">
            <b>Metodologías ágiles</b>, modulado y versionado.
          </p>
        </div>
        <div className="flex items-start my-2 ml-2">
          <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
          <p className="ml-2 xl:w-1/2">
            <b>Detectamos oportunidades</b> en tu modelo de negocio.
          </p>
        </div>
        <div className="flex items-start my-2 ml-2">
          <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
          <p className="ml-2 xl:w-1/2">
            <b>Te recomendamos </b>herramientas actualizadas para implementar.
          </p>
        </div>
        <div className="flex my-2 ml-2">
          <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
          <p className="ml-2">
            <b>Entrega valor</b> en poco tiempo a tus clientes.
          </p>
        </div>
        <div className="flex my-2 ml-2">
          <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
          <p className="ml-2">
            <b>Mejores opciones</b> en costo y calidad.
          </p>
        </div>
        <div className="mt-12 ml-10 hidden sm:flex">
          <CreateNow customStyle="py-3.5 w-4/12" />
        </div>
      </div>
      <div className="mt-12 flex sm:hidden">
        <CreateNow customStyle="py-3.5 w-full" />
      </div>
      <Image
        src="/assets/hero.svg"
        width="100"
        height="140"
        className="w-auto md:w-1/2 lg:w-2/5"
        loading={'lazy'}
        alt="Boosteriit"
      />
    </div>
  );
}
