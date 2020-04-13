import React, { Component } from "react";

import Julian from "../images/julian";
import Logo from "../images/logo_mntd";
import IconTwitch from "../../images/svg/icons/icon-twitch.svg";
import IconTwitter from "../../images/svg/icons/icon-twitter.svg";
import IconGithub from "../../images/svg/icons/icon-github.svg";
import IconLinkedin from "../../images/svg/icons/icon-linkedin.svg";
import IconYoutube from "../../images/svg/icons/icon-youtube.svg";
import IconEmail from "../../images/svg/icons/icon-email.svg";

import "./about.scss";

class About extends Component {
  render() {
    return (
      <section className="section-about" id="about">

        <div className="section-about__info l-inner-p l-outer-mx32">

          <figure className="section-about__photo l-outer-m">
            <Julian className="figure" />
          </figure>
          <p className="section-about__data">
            Hello, my name is <span className="text-name">Julián Duque</span>, I'm from Medellín, Colombia 🇨🇴 but
            currently living in St. Petersburg, FL (Tampa Bay, FL) 🇺🇸.
          </p>

        </div>

        <div className="section-about__networks l-outer-mx64">

          <figure className="logo section-about__logo l-inner-px32">
            <Logo />
          </figure>

          <p className="section-about__hashtag">#EStreamerCoders</p>

          <div className="section-contact l-inner-px32">

            <h3 className="section-contact__title">contact me</h3>

            <div className="section-contact__networks">

              <div className="content-network">
                <span className="icon icon-network icon-twitter">
                  <IconTwitter />
                </span>
                <a  className="nickname-network"
                    href="https://twitter.com/julian_duque"
                    target="_blank"
                    rel="noopener noreferrer"
                  > @julian_duque
                </a>
              </div>
              <div className="content-network">
                <span className="icon icon-network icon-github">
                  <IconGithub />
                </span>
                <a  className="nickname-network"
                    href="https://github.com/julianduque"
                    target="_blank"
                    rel="noopener noreferrer"
                  > @julianduque
                </a>
              </div>
              <div className="content-network">
                <span className="icon icon-network icon-linkedin">
                  <IconLinkedin />
                </span>
                <a  className="nickname-network"
                    href="https://www.linkedin.com/in/juliandavidduque"
                    target="_blank"
                    rel="noopener noreferrer"
                  > Julián David Duque
                </a>
              </div>
              <div className="content-network">
                <span className="icon icon-network icon-twitch">
                  <IconTwitch />
                </span>
                <a  className="nickname-network"
                    href="https://www.twitch.tv/julianduque"
                    target="_blank"
                    rel="noopener noreferrer"
                  > julianduque
                </a>
              </div>
              <div className="content-network">
                <span className="icon icon-network icon-youtube">
                  <IconYoutube />
                </span>
                <a  className="nickname-network"
                    href="https://www.youtube.com/user/julianduquej"
                    target="_blank"
                    rel="noopener noreferrer"
                  > julianduquej
                </a>
              </div>
              <div className="content-network">
                <span className="icon icon-network icon-email">
                  <IconEmail />
                </span>
                <a  className="nickname-network"
                    href="mailto:hola@julianduque.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  > hola@julianduque.co
                </a> 
              </div>

            </div>

          </div>
          
        </div>

        <div className="section-about__information l-outer-mx64">
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
            Fun fact: I love praying mantises and other type of critters! 💚💚💚
          </p>
        </div>
      </section>
    );
  }
}

export default About;
