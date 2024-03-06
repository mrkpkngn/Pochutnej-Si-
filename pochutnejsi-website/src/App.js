import './App.css';
import Navbar from './components/Navbar.jsx';
import HeroPage from './components/Hero.jsx';
import Home1 from './components/Home1.jsx'
import Home2 from './components/Home2.jsx'
import Home3 from './components/Home3.jsx';
import Home4 from './components/Home4.jsx';
import Home5 from './components/Home5.jsx'
import FrostEffect from './components/FrostEffect.jsx';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="flex flex-col ">
      <Navbar />
      <FrostEffect />
      <HeroPage />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Footer />
    </div>
  );
}

export default App;
