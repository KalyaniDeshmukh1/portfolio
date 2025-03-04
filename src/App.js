import './App.css';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Certificate from './Components/Certificate';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Certificate/>
      <Contact/>
      <Footer/>
   </div>
  );
}

export default App;
