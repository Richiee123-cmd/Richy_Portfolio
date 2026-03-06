import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact(){

return(

<section id="contact" className="contact-section">

<div className="container">

<h2 className="contact-title text-center">
Get In Touch
</h2>

<p className="contact-sub text-center">

Feel free to reach out if you want to collaborate,
discuss a project, or just connect.

</p>

<div className="row justify-content-center">

{/* EMAIL */}

<div className="col-md-4 mb-4">

<div className="contact-card">

<FaEnvelope className="contact-icon"/>

<h5>Email</h5>

<p>
richyellavoor2019@gmail.com
</p>

</div>

</div>

{/* PHONE */}

<div className="col-md-4 mb-4">

<div className="contact-card">

<FaPhone className="contact-icon"/>

<h5>Phone</h5>

<p>
+91 6282434979
</p>

</div>

</div>

{/* LOCATION */}

<div className="col-md-4 mb-4">

<div className="contact-card">

<FaMapMarkerAlt className="contact-icon"/>

<h5>Location</h5>

<p>
Kerala, India
</p>

</div>

</div>

</div>

{/* SOCIAL LINKS */}

<div className="social-links text-center">

<a
href="https://github.com/Richiee123-cmd"
target="_blank"
rel="noopener noreferrer"
>

<FaGithub/>

</a>

<a
href="#"
target="_blank"
rel="noopener noreferrer"
>

<FaLinkedin/>

</a>

</div>

</div>

</section>

)

}

export default Contact