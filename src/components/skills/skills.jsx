import React from 'react';

import "./skills.scss";


import SkillBar from 'react-skillbars';
const colors = {
    bar: 'red',
    title: {
      text: '#15023a',
      background: 'grey'
    }
  }
const skills = [
  {type: "Java", level: 100},
  {type: "Javascript", level: 75},
  {type: "Javascript", level: 75},{type: "Javascript", level: 75},{type: "Javascript", level: 75},{type: "Javascript", level: 75},{type: "Javascript", level: 75},
];
export default function Skills() {
  return (
    <div className="Skills">
      <h1>Skills</h1>
      <div className="container">
      <SkillBar skills={skills} colors={colors} width={'10vw'}/>
      </div>
    </div>
  );
}
