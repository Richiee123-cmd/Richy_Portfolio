import React from "react";
import "./Project.css";

function Projects(){

return(

<section id="projects" className="projects-section">

<div className="container">

<h2 className="projects-title text-center">
Projects
</h2>

<div className="row justify-content-center">

{/* PROJECT 1 */}

<div className="col-md-6 col-lg-4 mb-4">

<div className="project-card">

<img
src="https://plus.unsplash.com/premium_photo-1663076211121-36754a46de8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
alt="WedVista"
className="project-img"
/>

<div className="project-content">

<h4>WedVista</h4>

<p>

Wedding planning platform built with MERN stack
allowing users to manage vendors, bookings and
services in one place.

</p>

<p className="tech">

React • JavaScript • Node • Express • MongoDB • HTML • CSS
</p>

<div className="project-buttons">

<a
href="https://github.com/Richiee123-cmd"
className="btn btn-dark btn-sm me-2"
>
GitHub
</a>



</div>

</div>

</div>

</div>


{/* PROJECT 2 */}

<div className="col-md-6 col-lg-4 mb-4">

<div className="project-card">

<img
src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
alt="QuickBite"
className="project-img"
/>

<div className="project-content">

<h4>QuickBite</h4>

<p>

Food delivery web application with restaurant
menu listing, cart system and optimized
user experience.

</p>

<p className="tech">

React • JavaScript • Node • Express • MongoDB • HTML • CSS

</p>

<div className="project-buttons">

<a
href="https://github.com/Richiee123-cmd"
className="btn btn-dark btn-sm me-2"
>
GitHub
</a>


</div>

</div>

</div>

</div>


{/* PROJECT 3 */}

<div className="col-md-6 col-lg-4 mb-4">

<div className="project-card">

<img
src="https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdW1lfGVufDB8fDB8fHww"
alt="Resume Builder"
className="project-img"
/>

<div className="project-content">

<h4>Resume Builder</h4>

<p>

A web application that allows users to create
professional resumes dynamically and download
them instantly.

</p>

<p className="tech">
React • JavaScript • Node • Express • MongoDB • HTML • CSS

</p>

<div className="project-buttons">

<a
href="https://github.com/Richiee123-cmd"
target="_blank"
rel="noopener noreferrer"
className="btn btn-dark btn-sm me-2"
>
GitHub
</a>



</div>

</div>

</div>

</div>

</div>

</div>

</section>

)

}

export default Projects