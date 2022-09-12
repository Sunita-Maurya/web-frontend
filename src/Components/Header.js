import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
const Header = () => {

  return (
    <nav
      style={{
        background: '#003049',
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
      className={`flex items-center justify-between flex-wrap pr-16 p-4 w-full shadow-md transition-all`}
    >
      <div className=" w-1/3 flex items-center  flex-shrink-0  mr-6  ">
        <span className="font-semibold text-red-800 text-xl tracking-tight text-3xl ml-10">
          JMBDD
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto mycolor ">
        <div className="  text-sm lg:flex justify-between">
          {/* {ManuList.map((menu) => {
            return (
              <Link
                to={menu.url}
                className=" menutitile block lg:inline-block lg:mt-  hover:text-white text-lg transition-all"
              >
                {menu.title}
              </Link>
            );
          })} */}

          <Link
            to="/"
            className=" menutitile block lg:inline-block lg:mt- uppercase  hover:text-white text-lg transition-all"
          >
            home
          </Link>
          <Link
            to="/about"
            className=" menutitile block lg:inline-block lg:mt-  hover:text-white text-lg transition-all"
          >
            about
          </Link>
          <Link
            to="/"
            className=" menutitile block lg:inline-block lg:mt-  hover:text-white text-lg transition-all"
          >
            services
          </Link>
          <Link
            to="/"
            className=" menutitile block lg:inline-block lg:mt-  hover:text-white text-lg transition-all"
          >
            myTeam
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            className="contact-btn inline-block text-sm leading-none border rounded uppercase border ease-linear hover:border-transparent hover:text-black  mt-4 lg:mt-0 "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
