import React from 'react';
import bgImage from '../images/home-bg.jpg';
const Home = () => {
  return (
    <div
      style={{
        background: `url(${bgImage}) center/cover`,
        height: '100vh',
        objectFit: 'cover',
      }}
      className=""
    >
      {/* <img src={bgImage} alt="" /> */}
      Home
    </div>
  );
};

export default Home;
