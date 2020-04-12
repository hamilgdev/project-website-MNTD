import React, { Component } from "react";
import "./talks.scss";
// import Talk from "../images/talk_node";
import IconEye from "../../images/svg/icons/icon-eye.svg";

export default class Talks extends Component {
  render() {
    return (
      <section className="section-talks" id="talks">
        <div className="section-talks__content">
          {/* <figure className="section-talks__video">
            <Talk />
          </figure> */}
          <iframe
            title="video"
            className="section-talks__video"
            src="https://www.youtube.com/embed/Imeq3GeRttw"
          ></iframe>
          <h5 className="section-talks__title">Let it crash! - Julián Duque</h5>
          <p className="section-talks__subtitle">
            Speaker: Julian Duque | Senior Developer Advocate, Heroku.
          </p>
          <p>
            One common issue I have found working on the field with customers
            adopting Node.js is that they don’t have visibility around what
            happens when their applications crash, also, on specific critical
            applications these unexpected crashes don’t allow the server to exit
            gracefully missing opportunities to store state for possible
            recovery actions. This talk presents a series of best practices on
            how to deal with `uncaughtExceptions` and `unhandledRejections` in a
            way that gives developers visibility on errors, post-mortem
            information and how to handle graceful shutdowns.
          </p>
          <h5 className="section-talks__title">Recursos</h5>
          <div className="section-talks__buttons">
            <a>see slide</a>
            <a>download</a>
          </div>
        </div>
        <div className="section-talks__content-talks">
          <h5 className="section-talks__title-talk">more talks</h5>
          <hr />
          <div className="section-talks__list-talks">
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
            <a>
              <figure className="section-talks__icon">
                <IconEye />
              </figure>{" "}
              Let it crash! - Julián Duque
            </a>
          </div>
        </div>
      </section>
    );
  }
}
