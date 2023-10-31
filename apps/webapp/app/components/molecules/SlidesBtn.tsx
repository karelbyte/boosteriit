import React, { JSX, MouseEventHandler } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface ISlidesBtnProps {
  style?: string;
  next: MouseEventHandler<HTMLButtonElement>;
  previous: MouseEventHandler<HTMLButtonElement>;
}
export default function SlidesBtn(props: ISlidesBtnProps): JSX.Element {
  const { style, next, previous }: ISlidesBtnProps = props;
  return (
    <div className={style}>
      <button
        className="rounded-full border p-4 border-[#00B8EC] mr-6"
        onClick={previous}
      >
        <BsChevronLeft className="text-2xl text-[#00B8EC]" />
      </button>
      <button
        className="rounded-full border p-4 border-[#00B8EC]"
        onClick={next}
      >
        <BsChevronRight className="text-2xl text-[#00B8EC]" />
      </button>
    </div>
  );
}
