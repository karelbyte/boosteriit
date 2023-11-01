import { JSX } from 'react';
import CreateNow from "../atoms/CreateNow";
export default function Glue(): JSX.Element {
  return (
    <div className="fixed bottom-0 inset-x-0 border-t bg-white p-4 justify-center flex sm:hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]">
     <CreateNow customStyle={'p-2'}/>
    </div>
  );
}
