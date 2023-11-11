import React, { JSX, useEffect, useState } from 'react';
import Axios from 'axios'
import Link from 'next/link';
import ActionBtn from '../atoms/ActionBtn';
import { AiOutlineClose } from 'react-icons/ai';
import { BsShield } from 'react-icons/bs';
import { getDateNowFormat, isValidEmail } from '../../../utils';

interface IContactModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeModalSendSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
  activeModalRequestSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ContactModal(props: IContactModalProps): JSX.Element {
  const {
    showModal,
    setShowModal,
    activeModalSendSuccess,
    activeModalRequestSuccess,
  }: IContactModalProps = props;
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const min = getDateNowFormat();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>(min);
  const [time, setTime] = useState<string>('09:00');
  const [phone, setPhone] = useState<string>('');

  const [enableBtnMeet, setEnableBtnMeet] = useState<boolean>(true);

  const [enableBtnCall, setEnableBtnCall] = useState<boolean>(true);

  useEffect(() => {
    const checkName = name !== '';
    const checkMail = isValidEmail(email);
    const checkDate = date !== '';
    const checkTime = time !== '';
    const checkPhone = phone !== '';
    setEnableBtnMeet(!(checkName && checkMail && checkDate && checkTime));
    setEnableBtnCall(!(checkName && checkMail && checkPhone));
  }, [name, email, date, time, phone]);

  const closeModal = () => {
    setName('');
    setEmail('');
    setDate(min);
    setTime('09:00');
    setPhone('');
    setShowModal(false);
  };

  const sendDataToAdmin = async () => {
    const response = await Axios.post('/api/mail', {
      name,
      email,
      date,
      time
    })
    console.log(response)
    setShowModal(false)
    if (activeModalSendSuccess) activeModalSendSuccess(true);
  };

  const sendDataToRequestAdmin = () => {
    setShowModal(false)
    if (activeModalRequestSuccess) activeModalRequestSuccess(true);
  };
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="flex flex-col bg-white p-4 w-11/12 md:w-6/12 xl:w-4/12 rounded-lg">
            <div className="flex flex-col">
              <AiOutlineClose
                className="self-end cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <span className="p-2 font-bold text-md">
              Todo listo para construir tu solución
            </span>
            <span className="p-2 text-sm">
              Agenda una sesión ó llamada para iniciar la construcción de tu
              producto digital.
            </span>
            <div className="p-2">
              <div className="flex justify-between border-b">
                <button
                  className={`${
                    activeTab === 'tab1'
                      ? 'border-b-2 border-boo-btn-bg'
                      : 'text-boo-str-description'
                  } p-2  text-boo-btn-bg w-full text-xs md:text-sm`}
                  onClick={() => setActiveTab('tab1')}
                >
                  Agendar sesión en meet
                </button>
                <button
                  className={`${
                    activeTab === 'tab2'
                      ? 'border-b-2 border-boo-btn-bg'
                      : 'text-boo-str-description'
                  } p-2 text-boo-btn-bg w-full text-xs md:text-sm`}
                  onClick={() => setActiveTab('tab2')}
                >
                  Prefiero que me llamen
                </button>
              </div>
              <div>
                {activeTab === 'tab1' && (
                  <div className="mt-4">
                    <span>
                      Déjanos tus datos, nos pondremos en contacto contigo
                    </span>
                    <div className="border rounded-lg mt-4 p-2">
                      <span className="text-xs text-boo-str-description ">
                        Nombre completo (obligatorio)
                      </span>
                      <input
                        type="text"
                        className="w-full outline-none"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>

                    <div className="border rounded-lg mt-4 p-2">
                      <span className="text-xs text-boo-str-description">
                        Correo electrónico (obligatorio)
                      </span>
                      <input
                        type="email"
                        value={email}
                        className="w-full outline-none"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="flex mb-4 w-full">
                      <div className="border rounded-lg mt-4 p-2 mr-4 w-full">
                        <span className="text-xs text-boo-str-description">
                          Fecha (obligatorio)
                        </span>
                        <input
                          type="date"
                          min={min}
                          value={date}
                          className="w-full outline-none"
                          onChange={(event) => setDate(event.target.value)}
                        />
                      </div>

                      <div className="border rounded-lg mt-4 p-2 w-full">
                        <span className="text-xs text-boo-str-description">
                          Hora (obligatorio)
                        </span>
                        <input
                          type="time"
                          min="09:00"
                          max="18:00"
                          value={time}
                          className="w-full outline-none"
                          onChange={(event) => setTime(event.target.value)}
                        />
                      </div>
                    </div>
                    <ActionBtn title="Agendar meet" disabled={enableBtnMeet} actionFn={sendDataToAdmin} />
                    <div className="flex items-center mt-2 text-xs">
                      <BsShield className="text-boo-btn-bg" />
                      <span className="ml-2">
                        Tus datos están protegidos de acuerdo a nuestro{' '}
                        <Link href="/" className="text-boo-btn-bg">
                          aviso de privacidad
                        </Link>
                      </span>
                    </div>
                  </div>
                )}
                {activeTab === 'tab2' && (
                  <div className="mt-4">
                    <span>
                      Déjanos tus datos y nosotros te enviamos la sesión
                    </span>
                    <div className="border rounded-lg mt-4 p-2">
                      <span className="text-xs text-boo-str-description ">
                        Nombre completo (obligatorio)
                      </span>
                      <input
                        type="text"
                        value={name}
                        className="w-full outline-none"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>

                    <div className="border rounded-lg mt-4 p-2">
                      <span className="text-xs text-boo-str-description">
                        Correo electrónico (obligatorio)
                      </span>
                      <input
                        type="email"
                        value={email}
                        className="w-full outline-none"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="border rounded-lg mt-4 p-2 mb-[18px]">
                      <span className="text-xs text-boo-str-description">
                        Teléfono celular (obligatorio)
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        className="w-full outline-none"
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                    <ActionBtn
                      title="Agendar meet"
                      disabled={enableBtnCall}
                      actionFn={sendDataToRequestAdmin}
                    />
                    <div className="flex items-center mt-2 text-xs">
                      <BsShield className="text-boo-btn-bg" />
                      <span className="ml-2">
                        Tus datos están protegidos de acuerdo a nuestro{' '}
                        <Link href="/" className="text-boo-btn-bg">
                          aviso de privacidad
                        </Link>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
