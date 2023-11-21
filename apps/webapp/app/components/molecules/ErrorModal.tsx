import React, { JSX } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {BiErrorAlt} from 'react-icons/bi';
import ActionBtn from '../atoms/ActionBtn';
interface IContactModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ErrorModal(props: IContactModalProps): JSX.Element {
  const { showModal, setShowModal }: IContactModalProps = props;
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
              <div className="text-[40px] text-red-900 mb-4">
                <BiErrorAlt />
              </div>

              <p className="pb-2 font-bold text-[2rem] my-6">A ocurrido un error</p>
              <div className="w-1/3 mt-4">
                <ActionBtn
                  title="OK"
                  actionFn={() => setShowModal(false)}
                ></ActionBtn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
