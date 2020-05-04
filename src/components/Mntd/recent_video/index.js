import React from "react"
import IconPlay from "../../../images/svg/icons/icon-play.svg";

export default class RecentVideo extends React.Component {
  render() {
    return (
      <a
        href="#"
        rel="noopener noreferrer"
        className="recent-video__element card-widget__element"
      >
        <div className="recent-video__banner-video">
          {this.props.banner}
          <h2 className="recent-video__title-video">
            {this.props.title}
          </h2>
          <span className="icon recent-video__icon-play">
            <IconPlay />
          </span>
        </div>
      </a>
    )
  }
}
