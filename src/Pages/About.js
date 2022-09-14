import React, { useEffect } from 'react';
import itimg from '../images/it.jpg';
import cardimg from '../images/person.jpg';
const About = () => {
  useEffect(() => {}, window.scrollTo(0, 0));

  return (
    <div>
      <div
        className="mt-16 relative "
        style={{
          height: '20rem',
          width: '100%',
        }}
      >
        <img
          src={itimg}
          alt=""
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 flex justify-center items-center text-6xl font-bold backdrop-brightness-50">
          Who we are.
        </div>
      </div>
      <div
        className="m-8 p-8 flex flex-col border rounded"
        style={{ border: '1px solid #fffdfd52' }}
      >
        <div className="text-center">
          <h1 className="text-3xl mb-4"> Who we are.</h1>
          <p className="w-4/5 mx-auto">
            Nostrud nostrud non labore veniam ad exercitation qui. Sunt dolore
            proident aliquip reprehenderit ad et est sunt ex ad. Mollit esse
            pariatur voluptate officia deserunt nostrud enim in ut aliquip
            Nostrud nostrud non labore veniam ad exercitation qui. Sunt dolore
            proident aliquip reprehenderit ad et est sunt ex ad. Mollit esse
            pariatur voluptate officia deserunt nostrud enim in ut aliquip.
            proident aliquip reprehenderit ad et est sunt ex ad. Mollit esse
            pariatur voluptate officia deserunt nostrud enim in ut aliquip.
          </p>
        </div>

        <div className="mt-8 grid justify-items-center grid-rows-1 gap-8">
          <div className="p-4 bg-white rounded-lg w-1/2 -translate-x-2">
            <div
              className="flex justify-center  gap-4  -translate-x-32"
              style={{ width: '120%' }}
            >
              <img
                src={cardimg}
                alt=""
                className="object-cover rounded-full"
                style={{
                  height: '250px',
                  aspectRatio: '1/1',
                }}
              />
              <div className="text-black  mt-4 px-4">
                <h1 className="text-3xl mb-4"> What do we do</h1>
                <p>
                  Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                  dolore proident aliquip reprehenderit ad et est sunt ex ad.
                  Mollit esse pariatur voluptate officia deserunt nostrud enim
                  in ut aliquip Nostrud nostrud non labore veniam ad
                  exercitation qui. Sunt dolore proident aliquip reprehenderit
                  ad et est sunt ex ad. Mollit esse pa
                </p>
              </div>
            </div>
          </div>
          <div className=" p-4 bg-white rounded-lg w-1/2 translate-x-2">
            <div
              className="flex justify-center  gap-4"
              style={{ width: '120%' }}
            >
              <div className="text-black  mt-4 px-4">
                <h1 className="text-3xl mb-4"> Our Aim</h1>
                <p>
                  Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                  dolore proident aliquip reprehenderit ad et est sunt ex ad.
                  Mollit esse pariatur voluptate officia deserunt nostrud enim
                  in ut aliquip Nostrud nostrud non labore veniam ad
                  exercitation qui. Sunt dolore proident aliquip reprehenderit
                  ad et est sunt ex ad. Mollit esse pa
                </p>
              </div>
              <img
                src={cardimg}
                alt=""
                className="object-cover rounded-full"
                style={{
                  height: '250px',
                  aspectRatio: '1/1',
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default About;
