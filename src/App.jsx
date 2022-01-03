import React from 'react';

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import WorkExperience from "./components/WorkExperience/workExperience"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import SkillBars from "./components/skills/skills";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       
       <WorkExperience/>
       
       <Portfolio/>
      <Works/>
     </div>
     
    </div>
  );
}

export default App;
