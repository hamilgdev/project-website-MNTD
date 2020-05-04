import React, { Component } from "react";
import Julian from "../images/julian_profile";
import Logo from "../images/logo_mntd";
import { networks } from "../constants/networks";
import Network from "./Network"

import "./about.scss";

class About extends Component {
  render() {
    return (
      <section className="section-about" id="about">

        <div className="section-about__info l-inner-p">

          <figure className="section-about__photo l-outer-m">
            <Julian className="figure" />
          </figure>
          <p className="section-about__data">
            Hello, my name is <span className="text-name">Julián Duque</span>, I'm from Medellín, Colombia <span role="img" aria-label="country-co"> 🇨🇴 </span> but
            currently living in St. Petersburg, FL (Tampa Bay, FL) <span role="img" aria-label="country-us"> 🇺🇸 </span>.
          </p>

        </div>

        <div className="section-about__networks">
          <figure className="logo section-about__logo l-inner-px32">
            <Logo />
          </figure>
          <p className="section-about__hashtag">#EStreamerCoders</p>
          <div className="section-contact l-inner-px32">
            <h3 className="section-contact__title">contact me</h3>
            <div className="section-contact__networks">
              <Network {...networks.twitter} />
              <Network {...networks.github} />
              <Network {...networks.linkedin} />
              <Network {...networks.twitch} />
              <Network {...networks.youtube} />
              <Network {...networks.email} />
            </div>
          </div>
        </div>

        <div className="section-about__information">
          <p className="section-about__description l-inner-p">
            {" "}
            I'm a community leader, public speaker, JavaScript/Node.js
            evangelist, and an official Node.js collaborator. I work at{" "}
            <a
              className="link"
              href="https://nodesource.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeSource
            </a>{" "}
            as a Solutions Architect and currently organizing{" "}
            <a
              className="link"
              href="http://jsconf.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSConf
            </a>{" "}
            and{" "}
            <a
              className="link"
              href="https://colombia.nodeconf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeConf Colombia
            </a>
            , also helping organize{" "}
            <a
              className="link"
              href="https://www.meetup.com/es/suncoast-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suncoast.js
            </a>{" "}
            in St. Petersburg, FL, and{" "}
            <a
              className="link"
              href="https://medellinjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MedellinJS
            </a>
            , the largest JavaScript user group in Colombia with 4500+
            registered members.
          </p>
          <p className="section-about__description l-inner-p">
            I'm also passionate about education, and I've been teaching software
            development fundamentals, JavaScript, and Node.js through different
            community workshops, professional training engagements, and online
            platforms such as Platzi{" "}
            <a
              className="link"
              href="https://platzi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Platzi
            </a>
            . Also, I've worked in education projects like{" "}
            <a
              className="link"
              href="https://makeitreal.camp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Make It Real
            </a>{" "}
            and the{" "}
            <a
              className="link"
              href="https://coderise.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coderise
            </a>{" "}
            project as a volunteer, teaching web programming and JavaScript to
            teens from 13 to 17 years old in Medellín, Colombia.
          </p>
          <p className="section-about__description l-inner-p">
            Fun fact: I love praying mantises and other type of critters! <span role="img" aria-label="heart"> 💚💚💚 </span>
          </p>
        </div>
      
      </section>
    );
  }
}

export default About;
