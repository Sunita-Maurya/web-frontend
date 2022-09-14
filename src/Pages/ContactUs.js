import React, { useEffect, useState } from 'react';
import backImage from '../images/bg1.jpg';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
const ContactUs = () => {
  const [name, setName] = useState('');

  useEffect(() => {}, window.scrollTo(0, 0));
  return (
    <div
      style={{
        background: 'rgb(38,218,255)',
        background:
          'linear-gradient(331deg, rgba(38,218,255,1) 5%, rgba(11,11,58,1) 84%)',
      }}
      className="mybg  py-24 flex flex-col justify-evenly gap-24  md:flex-row md:space-x-6 md:space-y-0 "
    >
      <div
        className="flex flex-col"
        style={{
          justifyContent: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="font-bold text-6xl mb-4">Contact Us</h1>
          <p className="text-2xl text-white leading-10">
            Have an&nbsp;
            <span className="ideabg">idea💡</span>
            ? A new Project?
            <br />
            We would love to&nbsp;
            <span className="helpbg">help🤝</span>
            &nbsp;you to build.
          </p>
        </div>
        <div className="pt-4">
          <label className="text-cyan-400">opening hours</label>
          <p className="pl-4">
            Monday-Saturday <br />
            9:30am-6:30pm <br />
            Weekend <br />
            closed
          </p>
        </div>
        <div className="mt-8">
          <p className="text-cyan-400">address</p>
          <div className="inline-flex item-center">
            <MdLocationPin name="location" className="m-1 " />
            new delhi somthing
            <br />
            noida sector 62
            <br />
            and somthing
          </div>
        </div>
        <div className="flex flex-col pt-8 space-y-2">
          <p className="text-cyan-400">support</p>
          <div className="inline-flex item-center ">
            {/* <ion-icon name="call" className="text-xl"></ion-icon> */}
            <BsFillTelephoneFill name="call" className="m-1 " />
            <span>+(91)98765432</span>
          </div>
          <div className="inline-flex  item-center">
            <IoIosMail name="email" className="m-1 " />
            <span>contact@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 w-1/3">
        <form className="flex flex-col space-y-4 text-cyan-800">
          <div>
            <label for="" className="text-lg font-bold">
              Your Name
            </label>
          </div>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="ring-1 ring-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label for="" className="text-lg font-bold">
              Your Email
            </label>
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              className="ring-1 ring-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label for="" className="text-lg font-bold">
              Massage
            </label>
          </div>
          <div>
            <textarea
              rows="8"
              placeholder="Massage"
              className="ring-1 ring-gray-300  rounded-md w-full  mt-2 py-2 focus:ring-2 focus:ring-cyan-500 outline-none p-2"
            ></textarea>
          </div>
          <button className="flex self-end items-center bg-cyan-800 text-white rounded-lg px-6 py-2 uppercase text-lg">
            Send Massage
            <RiSendPlaneFill className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
