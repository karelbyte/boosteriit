import React, { JSX, MouseEventHandler } from 'react';
interface ActionBtnProps {
  title?: string;
  styleClass?: string;
  actionFn?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export default function ActionBtn(props: ActionBtnProps): JSX.Element {
  const { title, actionFn, styleClass, disabled }: ActionBtnProps = props;

  return (
    <button
      onClick={actionFn}
      disabled={disabled || false}
      className={
        styleClass
          ? styleClass
          : `py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover disabled:bg-gray-200`
      }
    >
      <span> {title || ''}</span>
    </button>
  );
}
