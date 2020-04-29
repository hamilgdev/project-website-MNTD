import React from "react"

export default class networks extends React.Component {
  render() {
    return (
      <div className="content-network">
        <span 
          title={this.props.title}
          className="icon icon-network"
        >
            {this.props.icon}
        </span>
        <a
          href={this.props.url}
          target="_blank" rel="noopener noreferrer" 
          aria-label={this.props.arial_label}
          rel="noopener noreferrer"
          className="nickname-network"
          >
            {this.props.nickname}
        </a>
      </div>
    )
  }
}
