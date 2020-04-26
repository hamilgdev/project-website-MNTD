import React, { Component } from "react";

import IconRead from "../../images/svg/icons/icon-read.svg";

import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <section className="section-home" id="/">

        <div className="content-banner">

          <h1 className="title section-home__title l-inner-p l-inner-mx32">
            developer advocate at
            <span className="section-home__content-cta">heroku
              <a 
              className="btn btn-cta btn-visit" 
              href="#"
              target="_blank"
              >
                visit</a>
            </span>
          </h1>

        </div>

        <div className="content-stay-tuned">

          <p className="section-home__description l-inner-p">
            stay tuned for more live <span className="tag-nodejs">Node.js</span>
          </p>
          <a className="btn btn-twitch"
             href="#"
             target="_blank"
          >go to twitch
          </a>
        </div>

        <div className="content-recommended recommended l-inner-p">
          
          <h2 className="title recommended-title">
            mis recomendados
          </h2>

          <div className="recent-videos l-outer-mx32">

            <h3 className="title recent-videos__title l-outer-m">
              videos más recientes
            </h3>

            <div className="card-widget__element highlight-video ratio-video">
              <iframe 
                
                src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              >
              </iframe>
            </div>

            <div className="card-widget__element ratio-video">
              <iframe 
                
                src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              >
              </iframe>
            </div>

            <div className="card-widget__element ratio-video">
              <iframe 
                
                src="https://www.youtube.com/embed/Imeq3GeRttw?controls=0" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              >
              </iframe>
            </div>

          </div>

          <div className="last-posts l-outer-mx32">

            <h3 className="title last-posts__title l-outer-m">ultima publicación</h3>
            
            <a className="post-link highlight-post" href="#">
              <article className="post-article last-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now is their DX (Developer Experience), it makes it very pleasant to deploy microservices to the cloud...
                </p>
                <div className="icon icon-blog">
                  <span className="icon-read">
                    <IconRead />
                  </span>
                </div>
              </article>
            </a>

            <a className="post-link" href="#">
              <article className="post-article last-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
                <div className="icon icon-blog">
                  <span className="icon-read">
                    <IconRead />
                  </span>
                </div>
              </article>
            </a>

            <a className="post-link" href="#">
              <article className="post-article last-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
                <div className="icon icon-blog">
                  <span className="icon-read">
                    <IconRead />
                  </span>
                </div>
              </article>
            </a>

          </div>

        </div>

      </section>
    );
  }
}