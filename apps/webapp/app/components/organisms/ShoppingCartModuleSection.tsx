import { AiOutlineClockCircle } from 'react-icons/ai';
import { getTotalDays } from '../../../utils';
import React, { JSX } from 'react';
import { IModule } from '../../../data/modules';
import ShoppingCartSection from './ShoppingCartSection';

interface IShoppingCartModuleSectionProps {
  title: string;
  modules: IModule[];
  deleteModule: (id: string) => void;
  canShow: (id: string) => string | undefined;
  setShowStatus: (id: string, status: boolean) => void;
}
export default function ShoppingCartModuleSection(
  props: IShoppingCartModuleSectionProps
) {
  const { title, modules, deleteModule, canShow, setShowStatus } = props;
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center border-y border-x px-4 rounded-t-lg bg-white">
        <span className="font-semibold mt-4 md:mt-0">{title}</span>
        <div className="flex my-4 items-center text-xs text-boo-str-description">
          <AiOutlineClockCircle />
          <span className="font-light ml-2">
            Tiempo aprox de implementación
          </span>
          <p className="ml-2 font-semibold">{getTotalDays(modules)} días</p>
        </div>
      </div>
      <ShoppingCartSection
        modules={modules}
        deleteModule={deleteModule}
        canShow={canShow}
        setShowStatus={setShowStatus}
      />
      <div className="border-b border-x p-1 rounded-b-lg bg-white"></div>
    </div>
  );
}
