import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import ProjectsSection from './components/Section/ProjectsSection';
import Slider from './components/Slider/Slider';
import Form from './components/Form/Form';

// import Particles from 'react-particles-js';
// import configParticles from './config/configParticles';

function App() {
  return (
    <div className="App" >
      <Header name="Componente Header"/>
      <Slider/>
      <ProjectsSection/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
