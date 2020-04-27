import React, { Component } from "react";
import LogoMNTD from "../../images/svg/logotipo_banner.svg";
import DecorativeFrost from "../../images/svg/decorative_frost.svg";

import "./mntd.scss";

export default class Mndt extends Component {
  render() {
    return (
      <section className="section-mntd" id="mntd">

        <div className="section-mntd__banner">
          <div className="section-mntd__banner-logo">
            <LogoMNTD />
          </div>
          <div className="section-mntd__banner-decorative">
            <DecorativeFrost />
          </div>
        </div>

        <div className="section-mntd__list l-inner-p">
          <select 
            name="season-list"
            className="season-list"
          >
            <option 
              value="seasonOne"
              className="season-element"
            >
              Node.js En Vivo - Temporada 1
            </option>
            <option 
              value="seasonTwo"
              className="season-element"
            >
              Node.js En Vivo - Temporada 2
            </option>
          </select>
        </div>

        <div className="section-mntd__content">

          <div className="recent-video card-widget">

            <div className="recent-video__data card-widget__data">
              <h2 className="card-widget__title">videos más recientes</h2>
              <p className="card-widget__subtitle">temporada 2</p>
            </div>

            <hr className="separator separator-mntd" />

            <div className="recent-video__content card-widget__content">
              <div className="recent-video__element card-widget__element ratio-video">
                <iframe 
                  title="videoMNTD"
                  src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                >
                </iframe>
              </div>
              <div className="recent-video__element card-widget__element ratio-video">
                <iframe 
                title="videoMNTD"
                  src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                >
                </iframe>
              </div>
              <div className="recent-video__element card-widget__element ratio-video">
                <iframe 
                title="videoMNTD"
                  src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                >
                </iframe>
              </div>
            </div>

          </div>

          <div className="more-video card-widget">
           
            <div className="more-video__data card-widget__data">
              <h3 className="card-widget__title">más videos</h3>
              <p className="card-widget__subtitle">temporada 2</p>
            </div>

            <hr className="separator separator-mntd" />
            
            <div className="more-video__content-videos l-inner-p">

              <div className="more-video__content card-widget__content">
                <div className="more-video__element card-widget__element ratio-video">
                  <iframe 
                  title="videoMNTD"
                    src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  >
                  </iframe>
                </div>
                <a 
                  className="more-video__description card-widget__description"
                  href="#"
                >
                  <h3 className="more-video__title">[MNTD] Node.js En Vivo - Bases de Datos - SQlite</h3>
                  <p className="more-video__information">
                    En esta transmisión aprenderemos sobre bases de datos con
                    Node.js, empezando con SQLite. ¡Estaremos construyendo un
                    manejador de passwords para la terminal!
                  </p>
                </a>
              </div>
              <div className="more-video__content card-widget__content">
                <div className="more-video__element card-widget__element ratio-video">
                  <iframe 
                  title="videoMNTD"
                    src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  >
                  </iframe>
                </div>
                <a 
                  className="more-video__description card-widget__description"
                  href="#"
                >
                  <h3 className="more-video__title">[MNTD] Node.js En Vivo - Bases de Datos - SQlite</h3>
                  <p className="more-video__information">
                    En esta transmisión aprenderemos sobre bases de datos con
                    Node.js, empezando con SQLite. ¡Estaremos construyendo un
                    manejador de passwords para la terminal!
                  </p>
                </a>
              </div>
              <div className="more-video__content card-widget__content">
                <div className="more-video__element card-widget__element ratio-video">
                  <iframe 
                  title="videoMNTD"
                    src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  >
                  </iframe>
                </div>
                <a 
                  className="more-video__description card-widget__description"
                  href="#"
                >
                  <h3 className="more-video__title">[MNTD] Node.js En Vivo - Bases de Datos - SQlite</h3>
                  <p className="more-video__information">
                    En esta transmisión aprenderemos sobre bases de datos con
                    Node.js, empezando con SQLite. ¡Estaremos construyendo un
                    manejador de passwords para la terminal!
                  </p>
                </a>
              </div>
              <div className="more-video__content card-widget__content">
                <div className="more-video__element card-widget__element ratio-video">
                  <iframe 
                  title="videoMNTD"
                    src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  >
                  </iframe>
                </div>
                <a 
                  className="more-video__description card-widget__description"
                  href="#"
                >
                  <h3 className="more-video__title">[MNTD] Node.js En Vivo - Bases de Datos - SQlite</h3>
                  <p className="more-video__information">
                    En esta transmisión aprenderemos sobre bases de datos con
                    Node.js, empezando con SQLite. ¡Estaremos construyendo un
                    manejador de passwords para la terminal!
                  </p>
                </a>
              </div>
              <div className="more-video__content card-widget__content">
                <div className="more-video__element card-widget__element ratio-video">
                  <iframe 
                  title="videoMNTD"
                    src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  >
                  </iframe>
                </div>
                <a 
                  className="more-video__description card-widget__description"
                  href="#"
                >
                  <h3 className="more-video__title">[MNTD] Node.js En Vivo - Bases de Datos - SQlite</h3>
                  <p className="more-video__information">
                    En esta transmisión aprenderemos sobre bases de datos con
                    Node.js, empezando con SQLite. ¡Estaremos construyendo un
                    manejador de passwords para la terminal!
                  </p>
                </a>
              </div>
              
            </div>

          </div>
        
        </div>

      </section>
    );
  }
}
