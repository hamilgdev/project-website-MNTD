import React from 'react';

import IconPlay from "../../../../assets/svg/icons/icon-play.svg";
import './index.scss';

class CardVideo extends React.Component {
  constructor(nameList, url, banner, title, description){
    super(nameList, url, banner, title, description)
    this.nameList = nameList
    this.banner = banner
    this.url = url
    this.title = title
    this.description = description
  }
 
  render(){
    const nameList = this.props.nameList
    if(nameList==="recent-video"){
      return(
        <a
          href={this.props.url}
          rel="noopener noreferrer"
          className={`${this.props.nameList}`}
        >
          <div className="banner-video">
            {this.props.banner} 
            <h2 className="title-video">
              {this.props.title}
            </h2>
            <span className="icon icon-play">
              <IconPlay />
            </span>
          </div>
        </a>
      );
    }else if(nameList==="more-video"){
      return(
        <a 
          href={this.props.url}
          rel="noopener noreferrer"
          className={`${this.props.nameList}`}
        >
        <div className="banner-video">
          {this.props.banner}
          <span className="icon icon-play">
            <IconPlay />
          </span>
        </div>
        <div className="data-video">
          <h2 className="title-video">
            {this.props.title}
          </h2>
          <p className="description-video">
            {this.props.description}
          </p>
        </div>
      </a>
      );
    }
  }
}

export default CardVideo;