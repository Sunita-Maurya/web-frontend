import Home from './Pages/Home.js';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import './App.css';
import ContactUs from './Pages/ContactUs.js';
import OurTeam from './Pages/OurTeam.js';

function App() {
  return (
    <div className="App relative font-roboto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
