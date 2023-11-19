import React, { JSX, MouseEventHandler } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import ActionBtn from '../atoms/ActionBtn';
import { IoIosAlert } from "react-icons/io";
interface IDeleteModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  caption: string;
  deleteAction: () => void | MouseEventHandler;
}
export default function DeleteModal(props: IDeleteModalProps): JSX.Element {
  const { showModal, setShowModal, caption, deleteAction }: IDeleteModalProps= props;
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 w-11/12 md:w-6/12 2xl:w-4/12 rounded-lg">
            <div className="flex flex-col p-4 justify-center items-center">
              <AiOutlineClose
                className="self-end cursor-pointer"
                onClick={() => setShowModal(false)}
              />
              <div className="text-[40px] text-boo-red mb-4">
                <IoIosAlert/>
              </div>

              <p className="pb-2 font-bold text-[1rem] my-6">{caption}</p>
              <div className="flex w-full">
                <button
                  type="button"
                  className="py-2 px-4 rounded mr-2 md:mt-0 border border-boo-btn-bg text-boo-btn-bg hover:bg-boo-btn-bg-hover hover:text-white w-full"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="py-2 px-4 rounded md:mt-0 border text-white bg-boo-btn-bg border-boo-btn-bg text-boo-btn-bg hover:bg-boo-btn-bg-hover hover:text-white w-full"
                  onClick={deleteAction}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
