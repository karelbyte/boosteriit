import Image from "next/image";
import SolutionSelectorModal from "../molecules/SolutionSelectorModal";
import ActionBtn from "../atoms/ActionBtn";
import React from "react";
import { useRouter } from "next/navigation";

export default  function ShoppingCartEmpty() {

  const router = useRouter()
  const goToUrl = (url: string) => {
    router.push(url)
  }
  return (
    <div className="flex flex-col justify-center items-center text-black mt-12 py-2 px-8 sm:py-4 sm:px-10 lg:px-20">
      <Image
        src="/assets/shopping_cart_outline.svg"
        width="100"
        height="140"
        className="w-auto mt-20"
        loading={'lazy'}
        alt="Boosteriit"
      />
      <p className="text-xl xl:text-2xl mb-4 mt-10 ">
        Tu carrito está vacío
      </p>
      <p className="text-md mb-4 mt-10 text-boo-gray-hard">
        Elige el dispositivo en el que deseas crear tu producto.
      </p>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-8/12">
        <button
          className="py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover mb-4 md:mb-0 mr-4"
          onClick={() => goToUrl('/industries')}
        >
          <span>Escógelo por industrias</span>
        </button>
        <SolutionSelectorModal nextPath={'/modules'}>
          <ActionBtn title="Árma tu solucion" />
        </SolutionSelectorModal>

      </div>
    </div>
  )
}
