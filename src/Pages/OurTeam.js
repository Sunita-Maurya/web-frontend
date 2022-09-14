import React, { useEffect } from 'react';
import profilePic1 from '../images/profilepic1.jpg';
import profilePic2 from '../images/profilepic2.jpg';
import profilePic3 from '../images/profilepic3.jpg';
import profilePic4 from '../images/profilepic4.jpg';

const teamImages = [profilePic2, profilePic1, profilePic3, profilePic4];
function OurTeam() {
  useEffect(() => {}, window.scrollTo(0, 0));

  return (
    <div className="text-center p-9	" id="team">
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

      <div className="mt-20 grid grid-cols-4 gap-3  justify-items-center justify-self-center ">
        {teamImages.map((img) => {
          return (
            <div className="card rounded-xl shadow-lg mb-20">
              <div className="img-box shadow rounded-xl">
                <img src={img} alt="" className="object-cover rounded-xl" />
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
