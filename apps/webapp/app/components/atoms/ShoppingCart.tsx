import { AiOutlineShoppingCart } from 'react-icons/ai';
import { JSX } from 'react';
export default function ShoppingCart(): JSX.Element {
  return (
    <button
      className="flex text-gray-60 md:mr-12 text-xl"
    >
      <AiOutlineShoppingCart/>
    </button>
  );
}
