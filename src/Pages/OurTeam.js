import React from 'react';
import cardimage from '../images/img1.jpg';

const teamImages = [cardimage, cardimage, cardimage, cardimage];
function OurTeam() {
  return (
    <div className="text-center p-9	">
      <h1 className="text-4xl font-bold uppercase h-30 mt-16">OurTeam</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="mt-20 grid grid-cols-4 gap-3 justify-items-center justify-self-center">
        {teamImages.map((img) => {
          return (
            <div className="card rounded-xl shadow-lg mb-20">
              <div className="img-box">
                <img src={img} alt="" className="object-cover  rounded-xl" />
              </div>
              <div className="content-box">
                <h1 className="text-2xl">Mr. John Walker</h1>
                <p>do consequat. Duis aute irure dolor in rep</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
