import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";

import {
FaReact,
FaNodeJs,
FaJsSquare,
FaHtml5,
FaCss3Alt,
FaDatabase
} from "react-icons/fa";

function Hero(){

const el = useRef(null);

useEffect(() => {

const typed = new Typed(el.current, {

strings: [
"MERN Stack Developer",
"React Developer",
"Full Stack Developer"
],

typeSpeed: 60,
backSpeed: 40,
loop: true

});

return () => {
typed.destroy();
};

}, []);

return(

<section className="hero-section">

{/* FLOATING TECH ICONS */}

<div className="tech-icons">

<FaReact className="icon react"/>
<FaNodeJs className="icon node"/>
<FaJsSquare className="icon js"/>
<FaHtml5 className="icon html"/>
<FaCss3Alt className="icon css"/>
<FaDatabase className="icon mongo"/>

</div>

<div className="hero-overlay">

<div className="container text-center">

<h1 className="hero-name">
Richy <span>Shaji</span>
</h1>

<h3 className="hero-role">

<span ref={el}></span>

</h3>

<p className="hero-desc">

I build modern and scalable web applications using
React, Node.js, Express and MongoDB.

</p>

<div className="hero-buttons">

<a href="#projects" className="btn btn-warning me-3">
View Projects
</a>

<a href="/Richy_Shaji_resume.pdf" className="btn btn-outline-light">
Download Resume
</a>

</div>

</div>

</div>

</section>

)

}

export default Hero