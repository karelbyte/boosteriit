import React, { JSX, MouseEventHandler } from 'react';
interface ActionBtnProps {
  title?: string;
  styleClass?: string;
  actionFn?: MouseEventHandler<HTMLButtonElement>;
}
export default function ActionBtn(props: ActionBtnProps): JSX.Element {
  const { title, actionFn, styleClass }: ActionBtnProps = props;

  return (
    <button
      onClick={actionFn}
      className={
        styleClass
          ? styleClass
          : `py-3.5 px-6 w-full justify-center text-white bg-[#00B8EC] border-0 focus:outline-none rounded hover:bg-[#007799]`
      }
    >
      <span> {title || ''}</span>
    </button>
  );
}
