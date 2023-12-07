import React, { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import ContactModal from '../organisms/ContactModal';
import DataSendModal from '../organisms/DataSendModal';
import RequestSentModal from '../organisms/RequestSentModal';
export default function Helper(): JSX.Element {
  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  const [showModalDataSend, setShowDataSend] = useState<boolean>(false);

  const [showModalRequest, setShowModalRequest] = useState<boolean>(false);

  const modalContactProps = {
    showModal: showModalContact,
    setShowModal: setShowModalContact,
    activeModalSendSuccess: setShowDataSend,
    activeModalRequestSuccess: setShowModalRequest,
  };

  const [visible, setVisible] = useState<boolean>(true);

  const [animate, seAnimate] = useState<string>(
    'w-auto cursor-pointer animated rubberBand'
  );

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 10000);

    return () => clearInterval(flickerInterval);
  }, []);

  useEffect(() => {
    seAnimate(
      !visible
        ? 'w-auto cursor-pointer animated rubberBand'
        : 'w-auto cursor-pointer'
    );
  }, [visible]);

  return (
    <div>
      <div className="flex items-center fixed bottom-[8rem] md:bottom-0 right-0 m-4 text-white rounded z-10">
        {visible && (
          <div className="hidden md:flex relative flex-col bg-boo-gray-hard p-2 h-18 rounded-lg">
            <div className="absolute bottom-2 -right-1 h-4 w-4 border-white rotate-45 bg-boo-gray-hard "></div>
            <span>¿Tienes dudas?</span>
            <span className="z-10">Obtén atención personalizada</span>
          </div>
        )}

        <Image
          onClick={() => setShowModalContact(true)}
          src="/assets/helper.svg"
          width="150"
          height="140"
          priority
          alt="Boosteriit"
          className={animate}
        />
      </div>
      <ContactModal {...modalContactProps} />
      <DataSendModal
        showModal={showModalDataSend}
        setShowModal={setShowDataSend}
      />
      <RequestSentModal
        showModal={showModalRequest}
        setShowModal={setShowModalRequest}
      />
    </div>
  );
}
