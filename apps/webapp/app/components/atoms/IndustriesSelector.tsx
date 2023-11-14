import React, { JSX, useEffect, useState } from 'react';
import { IIndustry, industries } from '../../../data/industries';
import useAppContext from '../../contexts/hookAppContext';
export default function IndustriesSelector(): JSX.Element {
  const { selectedIndustry, setSelectedIndustry } = useAppContext();

  const [currentIndustrySelected, setCurrentIndustrySelected] =
    useState<IIndustry | null>(null);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    setCurrentIndustrySelected(selectedIndustry);
  }, [selectedIndustry]);

  useEffect(() => {
    if (selectedIndustry === null) {
      setSelectedIndustry(industries[0]);
    }
  }, []);

  const selectOptionFn = (industry: IIndustry) => {
    toggleMenu();
    setSelectedIndustry(industry);
  };

  return (
    <div className="relative inline-block">
      <div className="border px-4 py-2 rounded-lg w-[20rem] flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-boo-btn-bg border border-boo-blue-2 bg-boo-blue-2">
            {currentIndustrySelected?.icon}
          </div>
          <span className="ml-4"> {currentIndustrySelected?.title}</span>
        </div>
        <span
          onClick={toggleMenu}
          className="cursor-pointer text-boo-btn-bg hover:underline"
        >
          cambiar
        </span>
      </div>
      {menuVisible && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md p-2">
          <ul>
            {industries &&
              industries.map((industry: IIndustry) => (
                <li
                  key={industry.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                  onClick={() => selectOptionFn(industry)}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-boo-btn-bg border border-boo-blue-2 bg-boo-blue-2">
                    {industry.icon}
                  </div>
                  <span className="ml-4">{industry.title}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
