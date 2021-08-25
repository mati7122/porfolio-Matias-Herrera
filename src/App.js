import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProjectsSection from './components/Section/ProjectsSection';
import Slider from './components/Slider/Slider';
import TechSection from './components/TechSection/Tech-section';
import About from './components/About';

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
      <Slider />
      <About />
      <ProjectsSection />
      <TechSection />
      <Footer />
    </div>
  );
}

export default App;
