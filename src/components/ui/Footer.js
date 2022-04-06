import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-develop">
        <p className="">Developed by: </p>
        <span>Jandir Sanchez</span>
      </div>
      <a
        className="view-code"
        target="_blank"
        href="https://github.com/Jandirs08/pokeDex"
      >
        View code on Github
        <i class="fa-brands fa-github"></i>
        {/* <FontAwesomeIcon className="ml-2" icon={faGithub} /> */}
      </a>
    </footer>
  );
};

export default Footer;
