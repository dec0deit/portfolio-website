import React from 'react';

import "./workExperience.scss";
import {data} from '../../jsonData/experience'
export default function WorkExperience() {
  
  return (
    <div className="workExperience" id="workExperience">
      <h1>Work Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc.map(item=><div>{item}</div>)}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
