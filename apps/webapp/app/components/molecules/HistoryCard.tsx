import React, { JSX } from 'react';
import Stars from '../atoms/Stars';
interface IHistoryCardProps {
  company: string;
  header: JSX.Element,
  children: JSX.Element
}
export default function HistoryCard(props: IHistoryCardProps): JSX.Element {
  const { company, header, children } = props;
  return (
    <div className="h-96 lg:h-[450px] xl:h-96 p-4">
      <div className="flex flex-col justify-between items-center border rounded-2xl border-blue-100 h-full bg-white p-6">
        <p className="pt-6 pb-4 text-slate-400">{company}</p>
        <Stars />
        {header}
        {children}
      </div>
    </div>
  );
}
