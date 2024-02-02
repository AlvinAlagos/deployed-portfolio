
import Header from "./Header";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import GlobalStyle from "./GlobalStyle";
import { useEffect, useRef, useState } from "react";

function App() {
  const [viewedAbout, setViewedAbout] = useState(false);
  const [viewedExperience, setViewedExperience] = useState(false);
  const [viewedProjects, setViewedProjects] = useState(false);

  let scrolled = false;
  let newYOffset = 0;
  const checkIfViewed = () => {
    const yOffset = window.scrollY;
    const sectionHeight = document.getElementById('hero').offsetHeight;   
    if(yOffset + sectionHeight >= sectionHeight && yOffset + sectionHeight < sectionHeight * 2){
      setViewedAbout(true);
    }else if(yOffset + sectionHeight >= sectionHeight * 2 && yOffset + sectionHeight < sectionHeight * 3){
      setViewedExperience(true);
    }else if(yOffset + sectionHeight >= sectionHeight * 3 && yOffset + sectionHeight < sectionHeight * 4){
      setViewedProjects(true);
    }
      
  }

  const handleUnload = () => {
    window.scrollTo({top:0,behavior:"instant"});
  }
  const handleScroll = (event) => {
    newYOffset = window.scrollY;
    
    if(!scrolled){ 
      scrolled=true;
      const sectionHeight = document.getElementById('hero').offsetHeight;
      if(event.deltaY > 0){
        if(window.innerWidth > 1500)
          // window.scrollTo(0,newYOffset + sectionHeight)
        checkIfViewed();
      }else if(event.deltaY < 0){
        if(window.innerWidth > 1500)
          // window.scrollTo(0,newYOffset - sectionHeight)
        checkIfViewed();
      }
    }
    setTimeout( () => { scrolled = false; }, 1000);
  }
  useEffect(() => {
    window.addEventListener("beforeunload",handleUnload)
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  },[])

  useEffect(() => {
    document.getElementById('root').addEventListener("wheel",handleScroll)
    return () => {
      document.getElementById('root').removeEventListener("wheel",handleScroll);
    };
  },[])
  return (
    <>
      <GlobalStyle/>
      <Header 
        viewedAbout={viewedAbout}
        viewedExperience={viewedExperience}
        viewedProjects={viewedProjects}
        setViewedAbout={setViewedAbout} 
        setViewedExperience={setViewedExperience}
        setViewedProjects={setViewedProjects}
      />
      <HeroSection/>
      <AboutSection isViewed={viewedAbout}/>
      <ExperienceSection isViewed={viewedExperience} />
      <ProjectsSection isViewed={viewedProjects}/>
      <ContactSection/>
    </>
  );
}

export default App;
