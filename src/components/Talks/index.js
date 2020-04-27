import React, { Component } from "react";
import "./talks.scss";

import IconEye from "../../images/svg/icons/icon-eye.svg";

export default class Talks extends Component {
  render() {
    return (
      <section className="section-talks" id="talks">

        <div className="current-talk card-widget">

          <div className="current-talk__video ratio-video">
            <iframe 
              className="video"
              src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            >
            </iframe>
          </div>

          <div className="current-video__data card-widget__content">

            <h2 className="current-talk__title card-widget__data card-widget__title">Let it crash! - Julián Duque</h2>
            <p className="current-talk__description card-widget__description">
            Speaker: Julian Duque | Senior Developer Advocate, Heroku. 
One common issue I have found working on the field with customers adopting Node.js is that they don’t have visibility around what happens when their applications crash, also, on specific critical applications these unexpected crashes don’t allow the server to exit gracefully missing opportunities to store state for possible recovery actions. This talk presents a series of best practices on how to deal with `uncaughtExceptions` and `unhandledRejections` in a way that gives developers visibility on errors, post-mortem information and how to handle graceful shutdowns.
            </p>

            <div className="current-talk__resources">
              <h3 className="current-talk__subtitle card-widget__subtitle">recursos</h3>
              <div className="current-talk__btns">
                <a 
                className="btn btn-slide" 
                href="#"
                target="_blank"
                >
                  see slide</a>
                <a 
                className="btn btn-download" 
                href="#"
                target="_blank"
                >
                  download</a>
              </div>
            </div>
      
          </div>

        </div>

        <div className="content-list card-widget">

          <div className="content-list__data card-widget__data">
            <h3 className="content-list__title card-widget__title">more talks</h3>
          </div>

          <hr className="separator separator-talks" />

          <div className="content-list__elements card-widget__content">
            <a className="content-list__description card-widget__description" href="#">
              <span className="content-list__icon icon-eye">
                <IconEye />
              </span> 
              Let it crash! - Julián Duque
            </a>
            <a className="content-list__description card-widget__description" href="#">
              <span className="content-list__icon icon-eye">
                <IconEye />
              </span> 
              Let it crash! - Julián Duque
            </a>
            <a className="content-list__description card-widget__description" href="#">
              <span className="content-list__icon icon-eye">
                <IconEye />
              </span> 
              Let it crash! - Julián Duque
            </a>
            <a className="content-list__description card-widget__description" href="#">
              <span className="content-list__icon icon-eye">
                <IconEye />
              </span> 
              Let it crash! - Julián Duque
            </a>
            <a className="content-list__description card-widget__description" href="#">
              <span className="content-list__icon icon-eye">
                <IconEye />
              </span> 
              Let it crash! - Julián Duque
            </a>
            <a className="content-list__description card-widget__description" href="#">
              <span className="content-list__icon icon-eye">
                <IconEye />
              </span> 
              Let it crash! - Julián Duque
            </a>
          </div>

        </div>

      </section>
    );
  }
}
