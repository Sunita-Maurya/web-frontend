import React from 'react';
// import bgImage from '../images/home-bg.jpg';
// import { Technologies } from '../Components/Technologies';
import Carousal from '../Components/Carousal';
import OurTeam from './OurTeam';
const Home = () => {
  return (
    <>
      {/* carousel */}
      <Carousal />
      <div>
        <OurTeam />
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <div style={{ backgroundColor: '#003049', padding: '50px' }}>
            003049
          </div>
          <div style={{ backgroundColor: '#003554', padding: '50px' }}>
            003554
          </div>
          <div style={{ backgroundColor: '#168AAD', padding: '50px' }}>
            168AAD
          </div>
          <div style={{ backgroundColor: '#1A759F', padding: '50px' }}>
            1A759F
          </div>
          <div style={{ backgroundColor: '#1E6091', padding: '50px' }}>
            1E6091
          </div>
          <div style={{ backgroundColor: '#124559', padding: '50px' }}>
            124559
          </div>
          <div style={{ backgroundColor: '#355070', padding: '50px' }}>
            355070
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
