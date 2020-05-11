import React, { Component } from "react";
import "./article.scss";
import IconTwitter from "../../../assets/svg/icons/icon-twitter.svg";
import IconFacebook from "../../../assets/svg/icons/icon-facebook.svg";
import IconLinkedin from "../../../assets/svg/icons/icon-linkedin.svg";
// import IconRead from "../../../assets/svg/icons/icon-read.svg";
import IconRowLeft from "../../../assets/svg/icons/icon-rowleft.svg";

export default class Article extends Component {
  render() {
    return (
      <section className="section-article" id="article">
        <div className="section-article__preview l-inner-p">
          <h2 className="title l-outer-m">
            Deploying Node.js microservices to ZEIT ▲ Now
          </h2>
          <p className="description l-outer-m">
            ZEIT Now is a cloud platform to deploy serverless applications, one
            of the things I like the most about Now is their DX (Developer
            Experience), it makes it very pleasant to deploy microservices to
            the cloud...
          </p>
          <div className="share l-outer-m">
            <p>share</p>
            <div className="content-network">
              <a
                href="https://twitter.com/julian_duque"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-network icon-twitter">
                  <IconTwitter />
                </span>
              </a>
            </div>
            <div className="content-network">
              <a
                href="https://facebook.com/jduquej"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-network icon-twitter">
                  <IconFacebook />
                </span>
              </a>
            </div>
            <div className="content-network">
              <a
                href="https://www.linkedin.com/in/juliandavidduque"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon icon-network icon-twitter">
                  <IconLinkedin />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="section-article__content content-info">
          <div className="section-article__more-info l-outer-mx32 l-inner-p">
            <p className="l-outer-m">
              ZEIT Now is a cloud platform to deploy serverless applications,
              one of the things I like the most about Now is their DX (Developer
              Experience), it makes it very pleasant to deploy microservices to
              the cloud
            </p>
            <p className="l-outer-m">
              in this article we are going to learn how to install Now and start
              deploying with one single command, Now.
            </p>
            <h4 className="subtitle l-outer-m">prerequisites</h4>
            <ul className="l-inner-p">
              <li>
                <span className="icon icon-rowleft">
                  <IconRowLeft />
                </span>
                Node.js 10 LTS Installed
              </li>
              <li>
                <span className="icon icon-rowleft">
                  <IconRowLeft />
                </span>
                A terminal
              </li>
              <li>
                <span className="icon icon-rowleft">
                  <IconRowLeft />
                </span>
                Code editor of your choice
              </li>
              <li>
                <span className="icon icon-rowleft">
                  <IconRowLeft />
                </span>
                A ZEIT account, you can signup for free here
              </li>
            </ul>
            <h4 className="subtitle l-outer-m">installation</h4>
            <p>
              First, let's install now cli from npm by running the following
              command:
            </p>
            <p className="code l-outer-m l-inner-p border-radius">
              $ npm install -g now
            </p>
            <h4 className="subtitle l-outer-m">login</h4>
            <p>
              Next, we need to identify ourselves in the platform, now CLI
              offers an easy way to do this by running:
            </p>
            <br />
            <p>
              This will ask for your email and will send you a Verification
              email, just by clicking on Verify will log you in the platform,
              it's like magic <span role="img" aria-label="icon-magic">🔮</span>!
            </p>
            <p className="code l-outer-m l-inner-p border-radius">
              $ now login
            </p>

            <h2 className="title l-outer-m">create your first microservices</h2>
            <p className="l-outer-m">
              We are ready to start creating our first microservice (on
              serverless application, you name it).
            </p>

            <p>
              Now provides a list of examples, for our exercise we are going to
              use Node.js ⬢, but hey!, Now supports other languages and
              platforms too, just give it a try with the one you like the most
              <span role="img" aria-label="icon-guiño">😉</span>
            </p>
          </div>

          <div className="recent-posts l-outer-mx32 l-inner-p">
            <h3 className="recent-posts__title  posts-title l-outer-m">
              publicaciones recientes
            </h3>

            <a className="post-link" href="#">
              <article className="post-article recent-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless
                  applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article recent-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless
                  applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article recent-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless
                  applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article recent-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless
                  applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>

            <div className="more-posts l-outer-m">
              <h4 className="more-posts__title posts-title">
                publicaciones en otros sitios
              </h4>

              <ul className="more-post l-inner-p">
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    Building my New Site with VuePress
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    Building my New Site with VuePress
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    3 Tips To Improve Your Programming Skills
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    How to Ace the Developer Interview
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    3 Tips To Improve Your Programming Skills
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    Building my New Site with VuePress
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    Building my New Site with VuePress
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    3 Tips To Improve Your Programming Skills
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    How to Ace the Developer Interview
                  </a>
                </li>
                <li className="more-post__item">
                  <a className="more-post__link" target="_blank" href="#">
                    <span className="more-post__icon icon-rowleft">
                      <IconRowLeft />
                    </span>
                    3 Tips To Improve Your Programming Skills
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
