import React from "react";
import "./Navbar.css";

function Navbar() {

return (

<nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">

<div className="container">

<a className="navbar-brand logo" href="#">
Richy<span>.S</span>
</a>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<a className="nav-link nav-hover" href="#about">
Home
</a>
</li>
<li className="nav-item">
<a className="nav-link nav-hover" href="#about">
About
</a>
</li>

<li className="nav-item">
<a className="nav-link nav-hover" href="#skills">
Skills
</a>
</li>

<li className="nav-item">
<a className="nav-link nav-hover" href="#projects">
Projects
</a>
</li>
<li className="nav-item">
<a className="nav-link nav-hover" href="#experience">
Experience
</a>
</li>

<li className="nav-item">
<a className="nav-link nav-hover" href="#contact">
Contact
</a>
</li>

</ul>

</div>

</div>

</nav>

)

}

export default Navbar