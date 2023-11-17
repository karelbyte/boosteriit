import React, { JSX } from 'react';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import ActionBtn from '../atoms/ActionBtn';
import { useRouter } from "next/navigation";
import useAppContext from "../../contexts/hookAppContext";
import useShoppingCart from "../../hooks/shoppingCartHook";
interface IContactModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DataSendModal(props: IContactModalProps): JSX.Element {
  const { showModal, setShowModal }: IContactModalProps = props;
  const { clear } = useShoppingCart();
  const clearShoppingCart = () => {
    setShowModal(false)
    clear()
  }
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 rounded-lg">
            <div className="flex flex-col p-4 justify-center items-center">
              <AiOutlineClose
                className="self-end cursor-pointer"
                onClick={() => setShowModal(false)}
              />
              <div className="text-[40px] text-boo-green mb-4">
                <AiFillCheckCircle />
              </div>

              <p className="pb-2 font-bold text-lg">Solicitud enviada</p>
              <p className="mt-4 text-boo-str-description">
                Te haremos llegar la invitación para la sesión en google meet en
                la fecha y horario elegida. No olvides confirmar tu asistencia.
              </p>

              <p className="mt-4 text-boo-str-description">
                {' '}
                ¡Gracias por ponerte en contacto con nosotros!
              </p>
              <div className="w-1/3 mt-4">
                <ActionBtn
                  title="Entendido"
                  actionFn={clearShoppingCart}
                ></ActionBtn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
