import Link from "next/link";
import Logout from "./Logout";

const AppNav = () => {
  return (
    <div className="fixed z-10 h-full left-0 top-0 flex flex-col px-10 transition-all pt-10 w-1/5 shadow-top-inner bg-app-dark-light">
      <ul className="list-none tracking-wide flex flex-col text-2xl font-bold">
        <li className="my-6 text-white">
          <Link href="/library">
            <a>Library</a>
          </Link>
        </li>
        <li className="my-6 text-white">
          <Link href="/about">
            <a href="#">Add book</a>
          </Link>
        </li>
        <li className="my-6 text-white">
            <Logout />
        </li>
      </ul> 
    </div>
  );
};

export default AppNav;
