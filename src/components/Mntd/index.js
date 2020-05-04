import React from "react";

import LogoMNTD from "../../assets/svg/logotipo_banner.svg";
import DecorativeFrost from "../../assets/svg/decorative_frost.svg";
// import IconPlay from "../../images/svg/icons/icon-play.svg";
// import mini components
import CardListVideo from '../mini_components/cards/card-list-video/index';
import BannerVideo from '../mini_components/banner-video/index';

import { seasons } from "../constants/seasons";
// import RecentVideo from "./recent_video";


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

            <select 
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
            </select>

        </div>

        <div className="section-mntd__content">
        
          <CardListVideo
            name="recent-video"
            title="videos más recientes"
            subtitle="temporada 2"
            elements= {
              <BannerVideo 
                name="card-widget__element"
                title={seasons.season01.episode01.title}
                banner={seasons.season01.banner}
              />
            }
          />

          <CardListVideo
            name="more-video"
            title="más videos"
            subtitle="temporada 2"
            elements={
              <div className="more-video__content card-widget__content">
                <a 
                  className="more-video__card-video card-widget__description"
                  href="#"
                >
                  <div className="more-video__banner-video">
                    {/* {seasons.season01.episode01.banner()} */}
                    {/* <span className="icon recent-video__icon-play"><IconPlay /></span> */}
                  </div>
                  <div className="more-video__data-video">
                    <h3 className="more-video__title-video">{seasons.season01.episode01.title}</h3>
                    <p className="more-video__information">{seasons.season01.episode01.description}</p>
                  </div>
                </a>
              </div>
            }
          />

        </div>
      </section>
    );
  }
}

export default Mndt;