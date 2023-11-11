import React, { JSX } from 'react';
import { IModule } from '../../../data/modules';
import { formatByCurrencyMXN } from '../../../utils';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

interface IShoppingCartSectionProps {
  modules: IModule[];
  deleteModule: (id: string) => void;
  canShow: (id: string) => string | undefined;
  setShowStatus: (id: string, status: boolean) => void;
}
export default function ShoppingCartSection(
  props: IShoppingCartSectionProps
): JSX.Element {
  const {
    modules,
    deleteModule,
    canShow,
    setShowStatus,
  }: IShoppingCartSectionProps = props;
  return (
    <div>
      {modules &&
        modules.map((module: IModule) => (
          <div key={module.id} className="w-full border-b">
            <div className="flex flex-col sm:flex-row  border-x bg-white p-4 justify-between items-center w-full">
              <div className="border h-16 w-16 bg-slate-50 mr-4"></div>
              <div className="w-8/12">
                <p>{module.title}</p>
                <span className="flex font-light text-xs text-boo-str-description mb-2 mt-2">
                  {module.timeStr}
                  <div
                    className="ml-4 text-boo-btn-bg underline cursor-pointer"
                    onClick={() => deleteModule(module.id)}
                  >
                    eliminar
                  </div>
                </span>
              </div>
              <span className="font-semibold text-lg ">
                $ {formatByCurrencyMXN(module.price)}
              </span>
            </div>
            <div className="border-x bg-white px-4 py-2 flex flex-col ">
              <div className="flex justify-between">
                <span className="ml-2 text-boo-gray-hard font-normal text-sm">
                  Descripción del módulo
                </span>
                {canShow(module.id) ? (
                  <div
                    onClick={() => setShowStatus(module.id, false)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactUp />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowStatus(module.id, true)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactDown />
                  </div>
                )}
              </div>

              {canShow(module.id) && (
                <div className="mt-2 font-light text-boo-str-description text-sm p-2 border-t">
                  <p>{module.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
