import Image from 'next/image'
export default function Logo() {
  return (
    <a className="flex title-font font-medium items-center text-gray-900">
        <Image
        src="/assets/logo.png"
        width="150"
        height="140"
        priority
        alt="Boosteriit"
        className="w-auto"
        />
    </a>
  );
}
