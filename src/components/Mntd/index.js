import React, { Component } from "react";
import "./mntd.scss";
import BannerLogo from "../images/banner-mntd";
export default class Mndt extends Component {
  render() {
    return (
      <section className="section-mntd" id="mntd">
        <div className="section-mntd__banner">
          <figure>
            <BannerLogo />
          </figure>
        </div>
        <select>
          <option value="Node.js En Vivo - Temporada 1">
            Node.js En Vivo - Temporada 1
          </option>
          <option value="Node.js En Vivo - Temporada 2">
            Node.js En Vivo - Temporada 2
          </option>
        </select>
        <div className="section-mntd__content">
          <div className="section-mntd__video-recent">
            <div className="section-mntd__title">
              <h4>videos más recientes</h4>
              {/* <p>temporada 2</p> */}
            </div>
            <hr />
            <iframe
              title="video"
              className="section-mntd__video"
              src="https://www.youtube.com/embed/Imeq3GeRttw"
            ></iframe>
            <iframe
              title="video"
              className="section-mntd__video"
              src="https://www.youtube.com/embed/Imeq3GeRttw"
            ></iframe>
            <iframe
              title="video"
              className="section-mntd__video"
              src="https://www.youtube.com/embed/Imeq3GeRttw"
            ></iframe>
          </div>
          <div className="section-mntd__more-video">
            <div className="section-mntd__title">
              <h4>más videos</h4>
              {/* <p>temporada 2</p> */}
            </div>
            <hr />
            <div className="section-mntd__lists">
              <iframe
                title="video"
                className="lists-video"
                src="https://www.youtube.com/embed/Imeq3GeRttw"
              ></iframe>
              <div className="text">
                <a>[MNTD] Node.js En Vivo - Bases de Datos - SQlite</a>
                <p>
                  En esta transmisión aprenderemos sobre bases de datos con
                  Node.js, empezando con SQLite. ¡Estaremos construyendo un
                  manejador de passwords para la terminal!
                </p>
              </div>
            </div>
            <div className="section-mntd__lists">
              <iframe
                title="video"
                className="lists-video"
                src="https://www.youtube.com/embed/Imeq3GeRttw"
              ></iframe>
              <div className="text">
                <a>[MNTD] Node.js En Vivo - Bases de Datos - SQlite</a>
                <p>
                  En esta transmisión aprenderemos sobre bases de datos con
                  Node.js, empezando con SQLite. ¡Estaremos construyendo un
                  manejador de passwords para la terminal!
                </p>
              </div>
            </div>
            <div className="section-mntd__lists">
              <iframe
                title="video"
                className="lists-video"
                src="https://www.youtube.com/embed/Imeq3GeRttw"
              ></iframe>
              <div className="text">
                <a>[MNTD] Node.js En Vivo - Bases de Datos - SQlite</a>
                <p>
                  En esta transmisión aprenderemos sobre bases de datos con
                  Node.js, empezando con SQLite. ¡Estaremos construyendo un
                  manejador de passwords para la terminal!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
