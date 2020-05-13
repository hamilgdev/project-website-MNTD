import React from 'react';

// import mini components
import CardListPost from '../../utils/cards/card-list-post/index';
import CardPost from '../../utils/cards/card-post/index';
import IconTwitter from '../../../assets/svg/icons/icon-twitter.svg';
import IconFacebook from '../../../assets/svg/icons/icon-facebook.svg';
import IconLinkedin from '../../../assets/svg/icons/icon-linkedin.svg';
import './post.scss';

class Post extends React.Component {
  
  render(){
    return(

      <article className="article" id="/article">
        
        <header className="article-header l-inner-px32">

          <div className="wrap-data">
            <h1 className="article-title">
              Deploying Node.js microservices to ZEIT ▲ Now
            </h1>
            <p className="article-summary">
              ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now is their DX (Developer Experience), it makes it very pleasant to deploy microservices to the cloud...
            </p>
            <div className="article-share">
              <small className="share-text">share</small>
              <span className="share-icons">
                <a 
                  className="icon icon-twitter"
                  href="#"
                  target="__blank"
                >
                  <IconTwitter />
                </a>
                <a 
                  className="icon icon-facebook"
                  href="#"
                  target="__blank"
                >
                  <IconFacebook />
                </a>
                <a 
                  className="icon icon-linkedin"
                  href="#"
                  target="__blank"
                >
                  <IconLinkedin />
                </a>
              </span>
            </div>
          </div> 
        
        </header>

        <main className="article-main l-inner-px32">

          <div className="wrap-data">

            <p className="article-paragraph">
              <a className="link" href="#">ZEIT Now</a> is a cloud platform to deploy serverless applications, one of the things I like the most about Now is their DX (Developer Experience), it makes it very pleasant to deploy microservices to the cloud.
            </p>
            <p className="article-paragraph">
              In this article we are going to learn how to install Now and start deploying with one single command, <code className="code">now</code>
            </p>

            <h3 className="article-title-h3">Prerequisites</h3>
            <ul className="article-ul">
              <li className="article-li">Node.js 10 LTS Installed</li>
              <li className="article-li">A terminal</li>
              <li className="article-li">Code editor of your choice</li>
              <li className="article-li">A ZEIT Now account, you can signup for free here</li>
            </ul>
          
            <h3 className="article-title-h3">Installation</h3>
            <p className="article-paragraph">
              First, let's install now CLI from <code className="code">now</code> by running the following command:
            </p>
            <pre className="code-block">
              <code className="code">
                $ npm install -g now
              </code>
            </pre>

            <h3 className="article-title-h3">Login</h3>
            <p className="article-paragraph">
              Next, we need to identify ourselves in the platform, <code className="code">now</code> CLI offers an easy way to do this by running:
            </p>
            <p className="article-paragraph">
              This will ask for your email and will send you a Verification email, just by clicking on Verify will log you in the platform, it's like magic 🔮!
            </p>
            <pre className="code-block">
              <code className="code">
                $ now login
              </code>
            </pre>

            <h2 className="article-title-h2">Create your first Microservice</h2>
            <p className="article-paragraph">
              We are ready to start creating our first microservice (or serverless application, you name it).
            </p>
            <p className="article-paragraph">
              Now provides a list of examples, for our exercise we are going to use Node.js ⬢, but hey!, Now supports other languages and platforms too, just give it a try with the one you like the most 😉
            </p>

          </div>

        </main>

        <hr className="separator l-outer-mx32" />

        <aside className="article-aside">

          <div className="wrap-data">

            <CardListPost 
              name="recent-posts"
              titleList="publicaciones recientes"
              elements={
                <React.Fragment>
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
                </React.Fragment>
              }
            />
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

        </aside>

      </article>
    );
  }
}

export default Post;