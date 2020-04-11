import React, { Component } from "react";
import "./about.scss";
import Julian from "../images/julian";
import Logo from "../../images/svg/logotipo.svg";
import Twitch from "../../images/svg/icons/icon-twitch.svg";
import Twitter from "../../images/svg/icons/icon-twitter.svg";
import Github from "../../images/svg/icons/icon-github.svg";
import Linkedin from "../../images/svg/icons/icon-linkedin.svg";
import Youtube from "../../images/svg/icons/icon-youtube.svg";
import Email from "../../images/svg/icons/icon-email.svg";
class About extends Component {
  render() {
    return (
      <section className="section-about" id="about">
        <div className="section-about__description">
          <div className="section-about__info">
            <figure className="section-about__avatar">
              <Julian className="figure" />
            </figure>
            Hello, my name is Julián Duque, I'm from Medellín, Colombia 🇨🇴 but
            currently living in St. Petersburg, FL (Tampa Bay, FL) 🇺🇸.
          </div>
          <div className="section-about__social">
            <figure className="logo">
              <Logo />
            </figure>
            <p className="hastag">#EStreamerCoders</p>
            <p className="title">contact me</p>
            <div className="networks">
              <div className="content">
                <figure>
                  <Twitch />
                </figure>
                <a
                  href="https://www.twitch.tv/julianduque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  julianduque
                </a>
              </div>

              <div className="content">
                <figure>
                  <Twitter />
                </figure>
                <a
                  href="https://twitter.com/julian_duque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @julian_duque
                </a>
              </div>

              <div className="content">
                <figure>
                  <Github />
                </figure>
                <a
                  href="https://github.com/julianduque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @julianduque
                </a>
              </div>

              <div className="content">
                <figure>
                  <Linkedin />
                </figure>
                <a
                  href="https://www.linkedin.com/in/juliandavidduque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Julián David Duque
                </a>
              </div>

              <div className="content">
                <figure>
                  <Youtube />
                </figure>
                <a
                  href="https://www.youtube.com/user/julianduquej"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  julianduquej
                </a>
              </div>

              <div className="content">
                <figure>
                  <Email />
                </figure>
                <a
                  href="mailto:hola@julianduque.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hola@julianduque.co
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-about__text l-container">
          <p className="section-about__p1">
            {" "}
            I'm a community leader, public speaker, JavaScript/Node.js
            evangelist, and an official Node.js collaborator. I work at{" "}
            <a
              className="links"
              href="https://nodesource.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeSource
            </a>{" "}
            as a Solutions Architect and currently organizing{" "}
            <a
              className="links"
              href="http://jsconf.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSConf
            </a>{" "}
            and{" "}
            <a
              className="links"
              href="https://colombia.nodeconf.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeConf Colombia
            </a>
            , also helping organize{" "}
            <a
              className="links"
              href="https://www.meetup.com/es/suncoast-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suncoast.js
            </a>{" "}
            in St. Petersburg, FL, and{" "}
            <a
              className="links"
              href="https://medellinjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MedellinJS
            </a>
            , the largest JavaScript user group in Colombia with 4500+
            registered members.
          </p>
          <p>
            I'm also passionate about education, and I've been teaching software
            development fundamentals, JavaScript, and Node.js through different
            community workshops, professional training engagements, and online
            platforms such as Platzi{" "}
            <a
              className="links"
              href="https://platzi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Platzi
            </a>
            . Also, I've worked in education projects like{" "}
            <a
              className="links"
              href="https://makeitreal.camp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Make It Real
            </a>{" "}
            and the{" "}
            <a
              className="links"
              href="https://coderise.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coderise
            </a>{" "}
            project as a volunteer, teaching web programming and JavaScript to
            teens from 13 to 17 years old in Medellín, Colombia.
          </p>
          <p>
            Fun fact: I love praying mantises and other type of critters! 💚💚💚
          </p>
        </div>
      </section>
    );
  }
}

export default About;
