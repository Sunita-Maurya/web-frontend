import Home from './Pages/Home.js';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
// import './App.css';

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
