'use client';
import React, { JSX, useEffect, useState } from 'react';
import Header from '../components/molecules/Header';
import Search from '../components/atoms/Search';
import ActionBtn from '../components/atoms/ActionBtn';
import SolutionSelectorModal from '../components/molecules/SolutionSelectorModal';
import Footer from '../components/organisms/Footer';
import IndustriesBannerFooter from '../components/molecules/IndustriesBannerFooter';
import { classSolutions } from '../../utils';
import { IAvailable, IIndustry, industries } from '../../data/industries';
import Helper from '../components/molecules/Helper';
import Image from 'next/image';
import useIndustriesHook from '../hooks/useIndustriesHook';
import useSolutions from '../hooks/solutionsHook.ts';
export default function Industries(): JSX.Element {
  const { addIndustryStorage } = useIndustriesHook();
  const [term, setTerm] = useState<string>('');
  const [currents, setCurrents] = useState<IIndustry[]>([]);
  const { addSolutionsStorage, setSelectedSolutions } = useSolutions();
  const setPrimaryIndustry = (industry: IIndustry) => {
    setSelectedSolutions([]);
    addSolutionsStorage([]);
    addIndustryStorage(industry);
  };
  useEffect(() => {
    const industriesByTerm =
      term === ''
        ? industries
        : industries.filter(
            (industry: IIndustry) =>
              industry.title.toLowerCase().includes(term.toLowerCase()) ||
              industry.description.toLowerCase().includes(term.toLowerCase())
          );
    setCurrents(industriesByTerm);
  }, [term]);
  return (
    <div className="overflow-hidden">
      <Header title={'Industrias'} urlBack={'/'}>
        <Search placeholder="Buscar" setTerm={setTerm} />
      </Header>
      <div className="p-6 bg-boo-blue text-black mt-10 md:mt-[4.7rem] xl:text-center mb-6 py-6 px-8 md:flex-row sm:py-6 sm:px-10 lg:px-20">
        Elige la industria a la que pertenece tu empresa y personalizaremos una
        solución que se adapte perfectamente a tus necesidades de negocio.
      </div>
      {currents &&
        currents.map((industry: IIndustry) => (
          <div
            key={industry.id}
            className="flex flex-col justify-between md:flex-row sm:py-4 sm:px-10 lg:px-20"
          >
            <div className="flex flex-col md:hidden justify-between w-full border-b p-4 pb-6 mb-4">
              <div className="flex items-start w-full md:w-1/2 rounded-lg md:mr-12 p-4">
                <Image
                  src={industry.imageBig}
                  width="100"
                  height="140"
                  className="w-2/12"
                  loading={'lazy'}
                  alt="Boosteriit"
                />
                <div className="flex flex-col ml-4">
                  <span className="font-bold  mb-3">{industry.title}</span>
                  <span className="mb-3 text-sm text-boo-gray-hard">
                    {industry.description}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-8/12">
                <SolutionSelectorModal nextPath="/industries-details">
                  <ActionBtn
                    title="+ Agregar"
                    actionFn={() => addIndustryStorage(industry)}
                  />
                </SolutionSelectorModal>
              </div>
            </div>
            <div className="hidden md:flex  md:flex-row justify-between w-full border-b p-4">
              <div className="relative w-full md:w-1/2 rounded-lg md:mr-12">
                <Image
                  src={industry.imageBig}
                  width="100"
                  height="140"
                  className="w-auto"
                  loading={'lazy'}
                  alt="Boosteriit"
                />
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-boo-btn-bg border border-boo-blue-2 bg-boo-blue-2">
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
                  <span className="text-boo-gray-hard">Disponible para:</span>
                  <div className="flex flex-col xl:flex-row mb-6 mt-2">
                    {industry.available &&
                      industry.available.map(
                        (item: IAvailable, index: number) => (
                          <div
                            className={`flex items-center mt-2 lg:mt-2 lg:mr-6 ${
                              classSolutions[item.id]
                            } p-2 rounded-md text-white`}
                            key={index}
                          >
                            {item.icon}
                            <span className="ml-2">{item.title}</span>
                          </div>
                        )
                      )}
                  </div>
                  <div className="w-full md:w-8/12">
                    <SolutionSelectorModal nextPath="/industries-details">
                      <ActionBtn
                        title="+ Agregar"
                        actionFn={() => setPrimaryIndustry(industry)}
                      />
                    </SolutionSelectorModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <IndustriesBannerFooter />
      <Helper />
      <Footer />
    </div>
  );
}
