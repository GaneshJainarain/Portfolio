import React from 'react'
import { BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom"
import logo from './github.png'; // Tell Webpack this JS file uses this image
import logo2 from './linkedin.png'; // Tell Webpack this JS file uses this image
import logo3 from './Gmail-logo.png'; // Tell Webpack this JS file uses this image

function ContactMe() {
  return (

    <div className="Contact Me">
        <br/>
        <br/>
        <h1> Contact Me </h1>
        <p>Should have your contact information, and render a form for folks to fill out their name, email, and a short message to you. 
          (the form onSubmit doesn't have to actually send an email but it should at least send an alert to the user that says, 
          "Hey (user's name) your message sent successfully!)
        </p>

      <span> 
        <nav>
          <li>
            <a href="https://github.com/RicheyJay23">
            <img src={logo} alt="Github Logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ganesh-jainarain-a95556157/">
            <img src={logo2} alt="Linkedin Logo" />
            </a>
          </li>
          <li>
            <a href="RicheyJay2@gmail.com">
            <img src={logo3} alt="Gmail Logo" />
            </a>
          </li>
        </nav>
      </span>

    </div>

    

  );
}

export default ContactMe;