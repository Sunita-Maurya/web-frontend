import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Header = () => {
  const [headerBg, setHeaderBg] = useState('transparent');
  const setHeaderColor = () => {
    window.scrollY <= 100 ? setHeaderBg('transparent') : setHeaderBg('white');
  };
  useEffect(() => {
    setHeaderColor();
    window.addEventListener('scroll', setHeaderColor);
    return () => window.removeEventListener('scroll', setHeaderColor);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between flex-wrap fixed bg-${headerBg} pr-16 p-4 w-full shadow-md navbar transition-all`}
    >
      <div className="flex items-center flex-shrink-0  mr-6  ">
        <span className="font-semibold text-xl tracking-tight ">
          Logo design
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex justify-around lg:items-center lg:w-auto ">
        <div className="text-sm lg:flex-grow justify-center">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8"
          >
            TAB1
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8"
          >
            TAB2
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white  mr-8"
          >
            TAB3
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white  mr-8"
          >
            TAB4
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white  mr-8"
          >
            TAB4
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
