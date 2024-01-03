import React from 'react';
import './skills.css';
import Bootstrap from '../../assets/Bootstrap.png';
import Css from '../../assets/Css.png';
import Html from '../../assets/Html.png';
import Js from '../../assets/Js.png';
import react from '../../assets/react.png'
import Ts from '../../assets/TS.png'


const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className='skillDesc'>I'm Favour Okon, a passionate web developer proficient in HTML, CSS, JavaScript, and React. My focus is on crafting sleek, responsive websites with a keen eye for design and optimal user experiences. I thrive on collaboration and open communication, ensuring projects exceed client expectations. Continuous learning drives me to stay updated on the latest web development trends. I approach every project with enthusiasm, aiming to transform visions into interactive web experiences. Let's embark on a journey to build something extraordinary and elevate your digital presence together.</span>
  <div className="skillBars">
    <div className="skillBar">
      <img src={Bootstrap} alt="Bootstrap" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Bootstrap</h2>
        <p>Bootstrap, the backbone of responsive design! Empowering developers with a robust framework, it seamlessly blends style and functionality, making web development a breeze</p>
      </div>
    </div>
    <div className="skillBar">
      <img src={Css} alt="Css" className="skillBarImg" />
      <div className="skillBarText">
        <h2>CSS</h2>
        <p>Cascading Style Sheets (CSS) – the artist's palette of the web. With its styling prowess, CSS transforms raw HTML into visually stunning and cohesive web experiences."</p>
      </div>
    </div>
    <div className="skillBar">
      <img src={Html} alt="Html" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Html</h2>
        <p>HTML, the foundational language of the web! It structures the digital landscape, providing the essential building blocks for creating everything from simple web pages to intricate online applications</p>
      </div>
    </div>
    <div className="skillBar">
      <img src={Js} alt="" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Js</h2>
        <p>JavaScript, the dynamic force behind the web! As a versatile scripting language, it breathes life into static web pages, enabling rich interactivity and seamless user experiences.</p>
      </div>
    </div>
    <div className="skillBar">
      <img src={react} alt="" className="skillBarImg" />
      <div className="skillBarText">
        <h2>React</h2>
        <p>React, the game-changer in web development! This JavaScript library revolutionizes user interfaces, allowing developers to build dynamic and interactive experiences with ease.</p>
      </div>
    </div>
    <div className="skillBar">
      <img src={Ts} alt="" className="skillBarImg" />
      <div className="skillBarText">
        <h2>Ts</h2>
        <p>TypeScript, where static typing meets JavaScript! This superset enhances code scalability and maintainability, bringing structure and confidence to the ever-evolving world of web development.</p>
      </div>
    </div>
  </div>
    </section>
  )
}

export default skills