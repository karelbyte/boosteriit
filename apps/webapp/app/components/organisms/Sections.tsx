import React, { JSX, useState } from 'react';
import Slider from 'react-slick';
import { ISection, sections } from '../../../data/sections';
import useAppContext from '../../contexts/hookAppContext';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
interface ISettings {
  className?: string;
  dots?: boolean;
  infinite?: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  variableWidth: boolean;
  responsive?: {
    settings: { slidesToScroll: number; slidesToShow: number; dots?: boolean };
    breakpoint: number;
  }[];
}

export default function Sections(): JSX.Element {
  const { selectedSections, setSelectedSections } = useAppContext();

  const settings: ISettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const slider: React.MutableRefObject<any> = React.useRef<any>(Slider);

  const next = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  const previous = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };
  const selectSectionsAction = (id: string) => {
    const found = selectedSections.find((section: string) => section === id);
    if (found) {
      setSelectedSections(selectedSections.filter((section) => section !== id));
    } else {
      setSelectedSections([...selectedSections, id]);
    }
  };

  const getStylesBtn = (id: string) => {
    const found = selectedSections.find((section: string) => section === id);
    return found
      ? 'border px-4 py-1 rounded-lg bg-boo-btn-bg text-sm'
      : 'border px-4 py-1 rounded-lg  text-sm';
  };

  return (
    <div className="flex justify-start mt-4 items-center">
      <div>
        <button
          className="rounded-full border p-2 border-boo-str-description hidden md:flex"
          onClick={previous}
        >
          <BsChevronLeft className="text-sm text-boo-str-description" />
        </button>
      </div>
      <div className="w-11/12">
        <Slider ref={slider} {...settings}>
          {sections &&
            sections.map((section: ISection, index: number) => (
              <div key={index} className="p-2">
                <button
                  className={getStylesBtn(section.id)}
                  onClick={() => selectSectionsAction(section.id)}
                >
                  {section.title}
                </button>
              </div>
            ))}
        </Slider>
      </div>
      <div>
        <button
          className="rounded-full border p-2 border-boo-str-description ml-4 hidden md:flex z-50"
          onClick={next}
        >
          <BsChevronRight className="text-sm text-boo-str-description" />
        </button>
      </div>
    </div>
  );
}
