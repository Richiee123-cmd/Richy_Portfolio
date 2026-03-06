import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Skills(){

return(

<section id="skills" className="skills-section">

<div className="container">

<h2 className="skills-title text-center">
My Skills
</h2>

<div className="row justify-content-center">

{/* HTML */}

<div className="col-md-6 col-lg-5 mb-4">

<div className="skill-box">

<div className="skill-title">
<FaHtml5 className="skill-icon html"/>
<span>HTML</span>
</div>

<div className="progress">
<div className="progress-bar html-bar" style={{width:"90%"}}>
90%
</div>
</div>

</div>

</div>

{/* CSS */}

<div className="col-md-6 col-lg-5 mb-4">

<div className="skill-box">

<div className="skill-title">
<FaCss3Alt className="skill-icon css"/>
<span>CSS</span>
</div>

<div className="progress">
<div className="progress-bar css-bar" style={{width:"85%"}}>
85%
</div>
</div>

</div>

</div>

{/* JavaScript */}

<div className="col-md-6 col-lg-5 mb-4">

<div className="skill-box">

<div className="skill-title">
<FaJs className="skill-icon js"/>
<span>JavaScript</span>
</div>

<div className="progress">
<div className="progress-bar js-bar" style={{width:"80%"}}>
80%
</div>
</div>

</div>

</div>

{/* React */}

<div className="col-md-6 col-lg-5 mb-4">

<div className="skill-box">

<div className="skill-title">
<FaReact className="skill-icon react"/>
<span>React</span>
</div>

<div className="progress">
<div className="progress-bar react-bar" style={{width:"80%"}}>
80%
</div>
</div>

</div>

</div>

{/* Node */}

<div className="col-md-6 col-lg-5 mb-4">

<div className="skill-box">

<div className="skill-title">
<FaNodeJs className="skill-icon node"/>
<span>Node.js</span>
</div>

<div className="progress">
<div className="progress-bar node-bar" style={{width:"75%"}}>
75%
</div>
</div>

</div>

</div>

{/* MongoDB */}

<div className="col-md-6 col-lg-5 mb-4">

<div className="skill-box">

<div className="skill-title">
<FaDatabase className="skill-icon mongo"/>
<span>MongoDB</span>
</div>

<div className="progress">
<div className="progress-bar mongo-bar" style={{width:"70%"}}>
70%
</div>
</div>

</div>

</div>

</div>

</div>

</section>

)

}

export default Skills