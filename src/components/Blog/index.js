import React, { Component } from "react";
// import mini components
import CardListPost from '../utils/cards/card-list-post/index';
import CardPost from '../utils/cards/card-post/index';

import "./blog.scss";

class Blog extends Component {
  render() {
    return (
      <section className="section-blog" id="blog">

        <div className="last-posts__content l-inner-p">

          <h2 className="last-posts-title  posts-title l-outer-m">ultima publicación</h2>

          <CardPost 
            nameList="input-post"
            url="#"
            namePost="last-post"
            title="Deploying Node.js microservices to ZEIT ▲ Now"
            description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now is their DX (Developer Experience), it makes it very pleasant to deploy microservices to the cloud..."
          />

        </div>

        <div className="recent-posts__content l-inner-p">

          <h3 className="recent-posts-title posts-title">publicaciones recientes</h3>

          <CardPost 
            nameList="input-post"
            url="#"
            namePost="recent-post"
            title="Deploying Node.js microservices to ZEIT ▲ Now"
            description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
          />
          <CardPost 
            nameList="input-post"
            url="#"
            namePost="recent-post"
            title="Deploying Node.js microservices to ZEIT ▲ Now"
            description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
          />
          <CardPost 
            nameList="input-post"
            url="#"
            namePost="recent-post"
            title="Deploying Node.js microservices to ZEIT ▲ Now"
            description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
          />
          <CardPost 
            nameList="input-post"
            url="#"
            namePost="recent-post"
            title="Deploying Node.js microservices to ZEIT ▲ Now"
            description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
          />
        </div>

        <hr className="separator separator-blog l-outer-m" />

        <div className="other-posts__content l-inner-p">

          <h3 className="other-posts-title posts-title l-outer-m">otras publicaciones</h3>
          
          <div className="inner-wrap-posts">
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="other-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="other-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="other-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="other-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="other-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
            <CardPost 
              nameList="input-post"
              url="#"
              namePost="other-post"
              title="Deploying Node.js microservices to ZEIT ▲ Now"
              description="ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now..."
            />
          </div>

        </div>

        <div className="more-posts__content">

          <CardListPost 
            name="more-posts"
            titleList="publicaciones en otros sitios"
            elements={
              <React.Fragment>
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="Building my New Site with VuePress"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="3 Tips To Improve Your Programming Skills"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="How to Ace the Developer Interview"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="Building my New Site with VuePress"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="3 Tips To Improve Your Programming Skills"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="How to Ace the Developer Interview"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="Building my New Site with VuePress"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="3 Tips To Improve Your Programming Skills"
                />
                <CardPost 
                  nameList="out-post"
                  url="#"
                  title="How to Ace the Developer Interview"
                />
              </React.Fragment>
            }
          />
        </div>

      </section>
    );
  }
}

export default Blog;