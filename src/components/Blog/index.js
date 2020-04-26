import React, { Component } from "react";


import IconRead from "../../images/svg/icons/icon-read.svg";
import IconRowLeft from "../../images/svg/icons/icon-rowleft.svg";


import "./blog.scss";

class Blog extends Component {
  render() {
    return (
      <section className="section-blog" id="blog">

        <div className="last-posts l-inner-p">

          <h2 className="last-posts__title  posts-title l-outer-m">ultima publicación</h2>
         
          <a className="post-link  highlight-post" href="article">
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

        </div>

        <div className="recent-posts l-inner-p">

          <h3 className="recent-posts__title  posts-title">publicaciones recientes</h3>

          <a className="post-link" href="#">
            <article className="post-article recent-post">
              <h2 className="post-article__title">
                Deploying Node.js microservices to ZEIT ▲ Now
              </h2>
              <p className="post-article__description">
                ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
              </p>
            </article>
          </a>
          <a className="post-link" href="#">
            <article className="post-article recent-post">
              <h2 className="post-article__title">
                Deploying Node.js microservices to ZEIT ▲ Now
              </h2>
              <p className="post-article__description">
                ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
              </p>
            </article>
          </a>
          <a className="post-link" href="#">
            <article className="post-article recent-post">
              <h2 className="post-article__title">
                Deploying Node.js microservices to ZEIT ▲ Now
              </h2>
              <p className="post-article__description">
                ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
              </p>
            </article>
          </a>
          <a className="post-link" href="#">
            <article className="post-article recent-post">
              <h2 className="post-article__title">
                Deploying Node.js microservices to ZEIT ▲ Now
              </h2>
              <p className="post-article__description">
                ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
              </p>
            </article>
          </a>
          
        </div>

        <hr className="separator separator-blog l-outer-m" />

        <div className="other-posts l-inner-p">

          <h3 className="other-posts__title posts-title l-outer-m">otras publicaciones</h3>
          
          <div className="inner-wrap-posts"> 
            <a className="post-link" href="#">
              <article className="post-article others-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article others-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article others-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article others-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article others-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            <a className="post-link" href="#">
              <article className="post-article others-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
              </article>
            </a>
            
          </div>

        </div>

        <div className="more-posts">

          <h4 className="more-posts__title posts-title">publicaciones en otros sitios</h4>

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

      </section>
    );
  }
}

export default Blog;
