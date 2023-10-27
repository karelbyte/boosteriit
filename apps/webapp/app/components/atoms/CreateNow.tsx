interface ICreateNowProps {
  mobileHidden?: boolean;
  customStyle: string;
}

export default function CreateNow(props: ICreateNowProps) {
  const { mobileHidden, customStyle } = props
  const show = mobileHidden ? 'hidden' : ''
  return (
    <button className={`${show} sm:flex justify-center text-white bg-[#00B8EC] border-0 ${customStyle} focus:outline-none rounded`}>
      <span>  Crear ahora</span>
    </button>
  );
}

