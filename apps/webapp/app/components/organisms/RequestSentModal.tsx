import React, { JSX } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
interface IRequestSentModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RequestSentModal(props: IRequestSentModalProps): JSX.Element {
  const { showModal, setShowModal }: IRequestSentModalProps = props;

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 rounded-lg">
            <div className="flex flex-col p-4">
              <AiOutlineClose
                className="self-end cursor-pointer"
                onClick={() => setShowModal(false)}
              />
              <p className="pb-2 font-bold text-lg">
                Todo listo para construir tu solución
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
