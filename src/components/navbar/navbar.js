import React from "react";
import "./navbar.scss"

const Navbar = () => {

return (
<nav className="navbar navbar-expand-lg navbar-light sidebar">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="title">a</span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <h1 className="title">SpotAroom</h1>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li className="nav-item">
        <a className="nav-link" href="#">The company<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">How we work<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact us</a>
      </li>
    </ul>
    
  </div>
</nav>
)

}
export default Navbar;