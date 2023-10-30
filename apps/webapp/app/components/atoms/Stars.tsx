import { AiFillStar } from 'react-icons/ai';
import { JSX } from 'react';
export default function Stars(): JSX.Element {
  return (
    <div className="flex text-yellow-300">
      {' '}
      <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
    </div>
  );
}
