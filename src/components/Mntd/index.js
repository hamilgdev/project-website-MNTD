import React from "react";

import LogoMNTD from "../../assets/svg/logotipo_banner.svg";
import DecorativeFrost from "../../assets/svg/decorative_frost.svg";
// import mini components
import CardListVideo from '../utils/cards/card-list-video/index';
import CardVideo from '../utils/cards/card-video/index';

import { seasons } from "../constants/seasons";

import "./mntd.scss";

class Mndt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'seasonTwo'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <section className="section-mntd" id="mntd">

        <div className="section-mntd__banner">
          <div className="section-mntd__banner-logo">
            <LogoMNTD />
          </div>
          <div className="section-mntd__banner-decorative">
            <DecorativeFrost />
          </div>
        </div>

        <div className="section-mntd__list l-inner-p">

            {/* <select 
              name="season-list"
              className="season-list" 
              value={this.state.value} 
              onChange={this.handleChange}
            >
              <option 
                value="seasonOne"
                className="season-element"
              >
                Node.js En Vivo - Temporada 1
              </option>
              <option 
                value="seasonTwo"
                className="season-element"
              >
                Node.js En Vivo - Temporada 2
              </option>
            </select> */}

        </div>

        <div className="section-mntd__content">
        
          <CardListVideo
            name="recent-videos"
            titleList="videos más recientes"
            subtitle="temporada 2"
            elements={
              <React.Fragment>
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
              </React.Fragment>
            }
          />

          <CardListVideo
            name="more-videos"
            titleList="más videos"
            subtitle="temporada 2"
            elements={
              <React.Fragment>
                <CardVideo 
                  nameList="more-video"
                  url="#"
                  banner={seasons.season01.episode01.banner()}
                  title={seasons.season01.episode01.title}
                  description={seasons.season01.episode01.description}
                />
                <CardVideo 
                  nameList="more-video"
                  url="#"
                  banner={seasons.season01.episode01.banner()}
                  title={seasons.season01.episode01.title}
                  description={seasons.season01.episode01.description}
                />
                <CardVideo 
                  nameList="more-video"
                  url="#"
                  banner={seasons.season01.episode01.banner()}
                  title={seasons.season01.episode01.title}
                  description={seasons.season01.episode01.description}
                />
                <CardVideo 
                  nameList="more-video"
                  url="#"
                  banner={seasons.season01.episode01.banner()}
                  title={seasons.season01.episode01.title}
                  description={seasons.season01.episode01.description}
                />
                <CardVideo 
                  nameList="more-video"
                  url="#"
                  banner={seasons.season01.episode01.banner()}
                  title={seasons.season01.episode01.title}
                  description={seasons.season01.episode01.description}
                />
              </React.Fragment>
            }
          />
        </div>
      </section>
    );
  }
}

export default Mndt;