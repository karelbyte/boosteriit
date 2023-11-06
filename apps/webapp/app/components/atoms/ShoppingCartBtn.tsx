import { AiOutlineShoppingCart } from 'react-icons/ai';
import { JSX } from 'react';
import { useRouter } from "next/navigation";
export default function ShoppingCartBtn(): JSX.Element {
  const router = useRouter()
  const goToUrl = (url: string) => {
    router.push(url)
  }
  return (
    <button
      className="flex text-gray-60 md:mr-12 text-xl"
      onClick={() => goToUrl('/shopping-cart')}
    >
      <AiOutlineShoppingCart/>
    </button>
  );
}
