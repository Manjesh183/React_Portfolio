import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>MKS.</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink> 
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/services"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#brands"}>Connect</HashLink>
        
      </main>
    </nav>
  );
};
//HashLink scroll you to desired section;Link render specific component
export default Header;
