import React from 'react';

// import mini components
import CardPost from '../utils/cards/card-post/index';
import CardVideo from '../utils/cards/card-video/index';
import Button from '../utils/button/index';
import { seasons } from "../constants/seasons";

import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="section-home" id="/">

        <div className="content-banner">

          <h1 className="title section-home__title l-inner-p l-inner-mx32">
            developer advocate at
            <span className="section-home__content-cta">heroku
              <Button 
                name="btn-cta"
                href="https://www.heroku.com/"
                target="_blank"
                texto="visit"
              />
            </span>
          </h1>

        </div>

        <div className="content-stay-tuned">

          <p className="section-home__description l-inner-p">
            stay tuned for more live <span className="tag-nodejs">Node.js</span>
          </p>
          <Button 
            name="btn-twitch"
            href="https://www.twitch.tv/julianduque"
            target="_blank"
            texto="go to twitch"
          />
        </div>

        <div className="content-recommended recommended l-inner-p">
          
          <h2 className="title recommended-title">
            mis recomendados
          </h2>

          <div className="recent-videos__content l-outer-mx32">

            <h3 className="title recent-videos-title l-outer-m">
              videos más recientes
            </h3>

            <CardVideo 
              nameList="recent-video"
              url="#"
              banner={seasons.season01.episode01.banner()}
              title={seasons.season01.episode01.title}
            />
            <CardVideo 
              nameList="recent-video"
              url="#"
              banner={seasons.season01.episode01.banner()}
              title={seasons.season01.episode01.title}
            />
            <CardVideo 
              nameList="recent-video"
              url="#"
              banner={seasons.season01.episode01.banner()}
              title={seasons.season01.episode01.title}
            />

          </div>

          <div className="recent-posts__content l-outer-mx32">

            <h3 className="title recent-posts-title l-outer-m">publicaciones recientes</h3>
            
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="last-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="last-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="last-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now is their DX (Developer Experience), it makes it very pleasant to deploy microservices to the cloud..."
            />

          </div>

        </div>

      </section>
    );
  }
}

export default Home;