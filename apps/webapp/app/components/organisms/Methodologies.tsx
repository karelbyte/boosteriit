import MethCard, { IMethCard } from '../molecules/MethCard';

export default function Methodologies() {
  const methodologies: IMethCard[] = [
    {
      imagePath: '/assets/marketplace.svg',
      title: 'Aplicación para móvil',
      description: `Una aplicación móvil disponible para su descarga en las tiendas de aplicaciones de Apple y Google, similar al ejemplo de 'Uber'.`,
    },
    {
      imagePath: '/assets/marketplace.svg',
      title: 'Aplicación para escritorio',
      description: `Un programa de escritorio se instala en tu ordenador y funciona sin necesidad de una conexión a internet. Un ejemplo conocido de esto es 'Uber'`,
    },
    {
      imagePath: '/assets/marketplace.svg',
      title: 'Página web',
      description: `Un sitio web responsivo que permite a las personas acceder desde cualquier dispositivo a tu página web 'www', siguiendo el ejemplo de 'apple.com'`,
    },
  ];
  return (
    <div className="flex flex-col items-center py-4 px-8 sm:py-12 sm:px-10 lg:px-20">
      <p className="mb-12 font-bold text-xl lg:text-center lg:text-4xl lg:w-4/12">
        Hemos creado una metodología exclusiva en el mercado
      </p>
      <p className="mb-12 lg:w-5/12 sm:text-center ">
        Tendrás la posibilidad de elegir tu desarrollo por industria o construir
        tu aplicación desde cero al combinar componentes. En este proceso,
        podrás visualizar estimaciones de precios y plazos.
      </p>
      <p className="mb-12 self-start sm:self-center font-bold">
        Puedes crear desde:
      </p>

      <div className="flex flex-col sm:flex-row">
        {methodologies &&
          methodologies.map((meth: IMethCard, index: number) => (
            <MethCard key={index} {...meth} />
          ))}
      </div>
    </div>
  );
}
