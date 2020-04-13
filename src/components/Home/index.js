import React, { Component } from "react";
import "./home.scss";
export default class Home extends Component {
  render() {
    return (
      <section className="section-home" id="/">
        <div className="section-home__content-banner">
          <p className="section-home__text-banner">
            Developer Advocate <br className="desktop" /> at
          </p>
          <div className="section-home__text-banner2">
            <p>Heroku</p>
            <a>visit</a>
          </div>
        </div>
        <div className="section-home__stay-tuned">
          <p>
            stay tuned for more live <p className="node">Node.js</p>{" "}
          </p>
          <a
            href="https://www.twitch.tv/julianduque"
            target="_blank"
            rel="noopener noreferrer"
          >
            go to twitch
          </a>
        </div>

        <div className="section-home__content-video">
          <div className="section-home__video-recent">
            <h4 className="section-home__title">mis recomendados</h4>
            <h4>video más recientes</h4>
            <div className="section-home__first-row">
              <iframe
                title="video"
                className="section-home__video"
                src="https://www.youtube.com/embed/Imeq3GeRttw"
              ></iframe>
            </div>
            <div className="section-home__second-row">
              <iframe
                title="video"
                className="section-home__video"
                src="https://www.youtube.com/embed/Imeq3GeRttw"
              ></iframe>
              <iframe
                title="video"
                className="section-home__video"
                src="https://www.youtube.com/embed/Imeq3GeRttw"
              ></iframe>
            </div>
          </div>
          <div className="section-home__more-video">
            <h4>ultimas publicaciones</h4>
            <div className="section-home__posts">
              <h4>Deploying Node.js microservices to ZEIT ▲ Now</h4>
              <p>
                {" "}
                ZEIT Now is a cloud platform to deploy serverless applications,
                one of the things I like the most about Now...
              </p>
            </div>
            <div className="section-home__posts">
              <h4>Deploying Node.js microservices to ZEIT ▲ Now</h4>
              <p>
                {" "}
                ZEIT Now is a cloud platform to deploy serverless applications,
                one of the things I like the most about Now...
              </p>
            </div>
            <div className="section-home__posts">
              <h4>Deploying Node.js microservices to ZEIT ▲ Now</h4>
              <p>
                {" "}
                ZEIT Now is a cloud platform to deploy serverless applications,
                one of the things I like the most about Now...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
