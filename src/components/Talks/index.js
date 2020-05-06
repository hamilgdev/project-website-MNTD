import React from 'react';

// import mini components
import Button from '../utils/button/index';
import CardListVideo from '../utils/cards/card-list-video/index';
import ItemVideo from '../utils/item-video/index';

import "./talks.scss";

class Talks extends React.Component {
  render() {
    return (
      <section className="section-talks" id="talks">

        <div className="current-talk card-widget">

          <div className="current-talk__video ratio-video">
            <iframe 
              title="video youtube"
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
                <Button 
                  name="btn-slide"
                  texto="see slide"
                />
                <Button 
                  name="btn-download"
                  texto="download"
                />
              </div>
            </div>
          </div>
        </div>

        <CardListVideo 
          name="talk-videos"
          titleList="mis charlas"
          subtitle=""
          elements={
            <React.Fragment>
              <ItemVideo titleItem="Let it crash! - Julián Duque" />
              <ItemVideo titleItem="Let it crash! - Julián Duque" />
              <ItemVideo titleItem="Let it crash! - Julián Duque" />
              <ItemVideo titleItem="Let it crash! - Julián Duque" />
              <ItemVideo titleItem="Let it crash! - Julián Duque" />
            </React.Fragment>
          }
        />
        
      </section>
    );
  }
}

export default Talks;