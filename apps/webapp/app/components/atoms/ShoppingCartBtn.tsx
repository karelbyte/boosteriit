import { AiOutlineShoppingCart } from 'react-icons/ai';
import { JSX } from 'react';
import { useRouter } from 'next/navigation';
import useAppContext from '../../contexts/hookAppContext';
export default function ShoppingCartBtn(): JSX.Element {
  const router = useRouter();

  const {
    selectedIndustriesTemplate,
    selectedAdditionals,
    selectedIntegrations,
    selectedModules,
  } = useAppContext();
  const goToUrl = (url: string) => {
    router.push(url);
  };
  const getItemsCount =
    selectedIndustriesTemplate.length +
    selectedAdditionals.length +
    selectedIntegrations.length +
    selectedModules.length;
  return (
    <button
      className="flex relative text-gray-60 md:mr-12 text-xl"
      onClick={() => goToUrl('/shopping-cart')}
    >
      <AiOutlineShoppingCart />
      {getItemsCount > 0 && (
        <div className="absolute border px-[5px] -top-2 -right-2 rounded-full text-xs bg-red-700 text-white">
          {getItemsCount}
        </div>
      )}
    </button>
  );
}
