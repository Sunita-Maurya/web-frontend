import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import '../App.css';
const Header = () => {
  return (
    <nav
      style={{
        // background: '#003049',
        background: 'transparent',

        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
      className={`flex items-center justify-between flex-wrap pr-16 p-4 w-full transition-all`}
    >
      <div className=" w-1/3 flex items-center  flex-shrink-0  mr-6  ">
        <span
          className="font-semibold text-xl tracking-tight text-3xl ml-10 "
          style={{
            letterSpacing: '-7px',
            color: '#eb2f40',
            textShadow: '0 0 20px black',
          }}
        >
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
            className=" menutitile block lg:inline-block text-lg transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" menutitile block lg:inline-block  text-lg transition-all"
          >
            About
          </Link>
          <Link
            to="/"
            className=" menutitile block lg:inline-block   text-lg transition-all"
          >
            Services
          </Link>
          <Link
            to="/"
            className=" menutitile block lg:inline-block text-lg transition-all"
          >
            Our Team
          </Link>
        </div>
        <div>
          <Link
            to="/contact-us"
            className="contact-btn inline-block leading-none mt-4 lg:mt-0 "
          >
            Contact Us
            <IoIosArrowDropright className="arrow" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
