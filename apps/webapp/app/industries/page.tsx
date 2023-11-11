'use client';
import React, { JSX } from 'react';
import Header from '../components/molecules/Header';
import Search from '../components/atoms/Search';
import ActionBtn from '../components/atoms/ActionBtn';
import SolutionSelectorModal from '../components/molecules/SolutionSelectorModal';
import Footer from '../components/organisms/Footer';
import IndustriesBannerFooter from '../components/molecules/IndustriesBannerFooter';
import useAppContext from '../contexts/hookAppContext';
import { IColorSolutions } from "../../utils";
import { IAvailable, IIndustry, industries } from '../../data/industries';

export default function Industries(): JSX.Element {
  const { setSelectedIndustry } = useAppContext();

  const classIconSolutions: IColorSolutions = {
    web: 'flex items-center mt-2 lg:mt-0 lg:mr-6 bg-boo-web p-2 rounded-md text-white',
    mobile:
      'flex items-center mt-2 lg:mt-0 lg:mr-6 bg-boo-mobile p-2 rounded-md text-white',
    desktop:
      'flex items-center mt-2 lg:mt-0 lg:mr-6 bg-boo-desktop p-2 rounded-md text-white',
  };
  const getClassIconSolution = (id: string): string =>  {
    return classIconSolutions[id] || '';
  };


  return (
    <div className="overflow-hidden">
      <Header title={'Industrias'} urlBack={'/'}>
        <Search placeholder="Buscar por nombre o industria" />
      </Header>
      <div className="p-6 bg-[#ECF5FE] text-black mt-20 xl:text-center mb-6 py-2 px-8 md:flex-row sm:py-4 sm:px-10 lg:px-20">
        Elige la industria a la que pertenece tu empresa y personalizaremos una
        solución que se adapte perfectamente a tus necesidades de negocio.
      </div>
      {industries &&
        industries.map((industry: IIndustry) => (
          <div
            key={industry.id}
            className="flex flex-col justify-between py-2 px-8 md:flex-row sm:py-4 sm:px-10 lg:px-20"
          >
            <div className="flex flex-col md:flex-row justify-between w-full border-b p-4">
              <div className="border w-full md:w-1/2 h-72 rounded-lg bg-slate-50 md:mr-12 p-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#00B8EC] border border-[#CCF1FB] bg-[#CCF1FB]">
                  {industry.icon}
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0 justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-lg mb-3">
                    {industry.title}
                  </span>
                  <span className="mb-3 text-[#161616]">
                    {industry.description}
                  </span>
                </div>

                <div className="">
                  <span className="text-[#686767]">Disponible para:</span>
                  <div className="flex flex-col xl:flex-row mb-6 mt-2">
                    {industry.available &&
                      industry.available.map(
                        (item: IAvailable, index: number) => (
                          <div
                            className={getClassIconSolution(item.id)}
                            key={index}
                          >
                            {item.icon}
                            <span className="ml-2">{item.title}</span>
                          </div>
                        )
                      )}
                  </div>
                  <div className="w-full md:w-8/12">
                    <SolutionSelectorModal nextPath="/modules">
                      <ActionBtn
                        title="+ Agregar"
                        actionFn={() => setSelectedIndustry(industry.id)}
                      />
                    </SolutionSelectorModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <IndustriesBannerFooter />
      <Footer />
    </div>
  );
}
