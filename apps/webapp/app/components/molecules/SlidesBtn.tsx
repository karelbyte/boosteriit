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
        className="rounded-full border p-4 border-boo-btn-bg mr-6"
        onClick={previous}
      >
        <BsChevronLeft className="text-2xl text-boo-btn-bg" />
      </button>
      <button
        className="rounded-full border p-4 border-boo-btn-bg"
        onClick={next}
      >
        <BsChevronRight className="text-2xl text-boo-btn-bg" />
      </button>
    </div>
  );
}
