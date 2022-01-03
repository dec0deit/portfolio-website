import React from 'react';

import './works.scss'
export default function WorkExperience() {
  const data = [
    {
      id: 1,
      name: "Altius(2k20)",
      title: "NodeJs, Firebase and React",
      desc:"An Interactive Website for the annual technical fest of NIT Kurukshetra to provide all the necessary facilities to the students"
      ,
      link:"https://website-frontend20.vercel.app/",
      
    },
    {
      id: 2,
      name: "Chat Portal",
      title: "Nodejs, ejs and MongoDB",
      desc:"A Website that is designed to chat online in collaboration/group using web sockets in Node js, Firebase, and MongoDB"      ,
      link:"https://chirp-chat.herokuapp.com/",
      
    },
    {
      id: 3,
      name: "Home Treatment",
      title: "NodeJs, Flutter, ejs and Mongodb",
      desc:"A full-fledged Client-Server facility built using time scheduling that manages the availability and fixing of your health appointments in nearby hospitals which is integrated with third-party ML APIs to check various diseases using symptoms/images",
      link:"https://hospital-appointments.herokuapp.com",
      appLink:"https://github.com/dec0deit/Excal-Hospital-Project"
    },
    {
      id: 4,
      name: "E-Commerce Website",
      title: "ReactJs and Firebase",
      desc:"An E-Commerce website build using firebase and reactJS to purchase various things.",
      link:"https://hope-and-shop.herokuapp.com/",
  },
    {
      id: 5,
      name: "Aleph",
      title: "NodeJs, ReactJs and MongoDB",
      desc:"It is an LMS(Learning Management System) developed in the MERN stack that provides a linkage between  schools and their students by giving them video calling, chatting, and document sharing services.",
      link:"https://github.com/dec0deit/aleph"
    },
    
  ];
  return (
    <div className="works" id="works">
      <h1>Projects/Publications</h1>
      <div className="container1">
        {data.map((d) => (
          <div className={d.featured ? "card1 featured" : "card1"}>
            <div className="bottom">
              <a href={d.link} style={{color:'#222831',textDecoration:'underline'}}>
                <h3>{d.name}</h3>
              
              </a><h4>{d.title}</h4>
          
            <div className="center">
              {d.desc}
            </div>
            {d.appLink?<h4>
              <a href={d.appLink} style={{color:'#222831',textDecoration:'underline'}}>
                <h3>App Link</h3>
              
              </a>
            </h4>:<div></div>}
          </div>  
          </div>
        ))}
      </div>
    </div>
  );
}
