import CreateNow from '../atoms/CreateNow';
import Logo from '../molecules/Logo';

export default function NavBar() {
  return (
    <header className="text-gray-900 body-font">
      <div className="mx-auto flex items-center justify-between p-5 border-b-2 shadow-sm">
        <Logo />
        <nav className="hidden sm:flex">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <CreateNow />
      </div>
    </header>
  );
}
