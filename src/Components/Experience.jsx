import React from "react";
import "./Experince.css";

function Experience(){

return(

<section id="experience" className="experience-section">

<div className="container">

<h2 className="experience-title text-center">
Experience
</h2>

<div className="row justify-content-center">

<div className="col-lg-10">

{/* LUMINAR */}

<div className="experience-card">

<h4>Luminar Technolab</h4>

<h6 className="role">
Full Stack Web Development Intern
</h6>

<p className="location">
📍 Kochi, India
</p>

<p className="duration">
July 2025 – Feb 2026
</p>

<ul>

<li>
Developed responsive user interfaces using
<strong> React.js </strong> improving usability
across multiple devices.
</li>

<li>
Designed and implemented <strong>RESTful APIs</strong>
using Node.js and Express.js.
</li>

<li>
Implemented <strong>JWT authentication</strong>
for secure login and authorization.
</li>

<li>
Worked with <strong>MongoDB</strong> for database
management and CRUD operations.
</li>

<li>
Collaborated with team members using
<strong> Git and GitHub</strong>.
</li>

</ul>

</div>


{/* CODELAB */}

<div className="experience-card">

<h4>Codelab Systems</h4>

<h6 className="role">
MERN Stack Development Intern
</h6>

<p className="location">
📍 Mangalore, India
</p>

<p className="duration">
July 2024 – October 2024
</p>

<ul>

<li>
Built reusable and dynamic UI components
using <strong>React.js</strong>.
</li>

<li>
Created responsive layouts for better
user experience across devices.
</li>

<li>
Developed backend APIs using
<strong> Node.js and Express.js</strong>.
</li>

<li>
Performed <strong>CRUD operations</strong>
with MongoDB for efficient data handling.
</li>

<li>
Gained hands-on experience in
<strong>full-stack development</strong>.
</li>

</ul>

</div>

</div>

</div>

</div>

</section>

)

}

export default Experience