import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import Popup from 'reactjs-popup';
import {
  WorkExperiencePortfolio,
  ProjectsPortfolio,
  AlgorithmsPortfolio,
  FreelancingPortfolio,
  SkillsPortfolio,
  CoursesPortfolio,
} from "../../data";


function AlgorithmComponent(){
  return <div className="container">
    {AlgorithmsPortfolio.map((d)=>
      <a className="item" href={d.link}>
      <img
        src={d.img}
        alt=""
      />
      <h3>Click Me</h3>
     <a href=""/>
    </a>
    )}
    </div>

}

function CoursesComponent(){
  return <div className="container">
  {CoursesPortfolio.map((d)=>
    <div className="item">
    <img
      src={d.img}
      alt=""
    />
    <h3>{d.title}</h3>
  </div>
  )}
  </div>

}

function SkillsComponent(){
return <div className="container">
    {SkillsPortfolio.map((d)=>
      <div className="item">
      <img
        src={d.img}
        alt=""
      />
      <h3>{d.title}</h3>
    </div>
    )}
    </div>

}







export default function Portfolio() {
  const [selected, setSelected] = useState("Cp Platforms");
  const [id,setID] = useState(1);
  const list = [
    {
      id: "Cp Platforms",
      title: "Cp Platforms",
    },
    {
      id: "Skills",
      title:"Skills"
    },
    {
      id:"Courses/Certificates",
      title:"Courses/Certificate"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "Cp Platforms":
        setID(1);
        break;
      case "Courses/Certificates":
        setID(2);
        break;
      case "Skills":
        setID(3);
        break;
      case "Freelancing Work":
        setID(4);
      break;
      case "Projects":
        setID(5);
        break;
      default:
        setID(1);
        
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {
          id == 1 ? <AlgorithmComponent/> : id ==2 ? <CoursesComponent/> : id == 3 ? <SkillsComponent/> : <AlgorithmComponent></AlgorithmComponent>
        }
      </div>
    </div>
  );
}
