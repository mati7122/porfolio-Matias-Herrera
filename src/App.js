import './App.scss';
import './Style.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ProjectsSection from './Components/ProjectsSection';
import Slider from './Components/Slider';
import TechSection from './Components/TechSection';
import About from './Components/About';

import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    // MY PROJECTS && TECH SECTION
    let techSection = document.querySelector(".animateTech");
    let projectSection = document.querySelector(".testStart");

    function showScrollTech() {

      let scrollTop = document.documentElement.scrollTop;

      let techSectionHigh = techSection.offsetTop;
      let projectSectionHigh = projectSection.offsetTop;

      if (techSectionHigh -400 < scrollTop) {
        techSection.style.opacity = 1;
        techSection.style.marginLeft = 0;
      }

      if (projectSectionHigh -400 < scrollTop) {
        projectSection.style.opacity = 1;
        projectSection.style.marginRight = 0;
      }

    }

    window.addEventListener('scroll', showScrollTech);
  }, [])

  return (
    <div className="App" >
      <Header/>
      <Slider/>
      <About/>
      <ProjectsSection/>
      <TechSection/>
      <Footer/>
    </div>
  );
}

export default App;
