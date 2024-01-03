import React from 'react';
import './work.css';
import port1 from '../../assets/portfolio-1.png';
import port2 from '../../assets/portfolio-2.png';
import port3 from '../../assets/portfolio-3.png';
import port4 from '../../assets/portfolio-4.png';
import port5 from '../../assets/portfolio-5.png';                                                                                         
import port6 from '../../assets/portfolio-6.png';


const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my Skills and experience to help business achieve their goals and create a strong online presence </span>
        <div className="worksImgs">
            <img src={port1} alt="" className="worksImg" />
            <img src={port2} alt="" className="worksImg" />
            <img src={port3} alt="" className="worksImg" />
            <img src={port4} alt="" className="worksImg" />
            <img src={port5} alt="" className="worksImg" />
            <img src={port6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works