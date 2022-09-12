import Home from './Pages/Home.js';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="relative font-mono red ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
