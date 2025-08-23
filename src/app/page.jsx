
import About from "./about/page";
import HeroSection from "./HeroSection/page";
import Contact from "./contact/page";
import Skill from "./skills/page";
import Project from "./project/page";

export default function Home() {
  return (
    <>
   <div id="home">
  <HeroSection />
</div>
<div id="about">
  <About />
</div>
<div id="skills">
  <Skill />
</div>
<div id="projects">
  <Project />
</div>
<div id="contact">
  <Contact />
</div>
  </>
  );
}