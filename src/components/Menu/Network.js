import React from "react"

export default class networks extends React.Component {
  render() {
    return (
        <a
          title={this.props.title}
          href={this.props.url}
          target="_blank" rel="noopener noreferrer" 
          aria-label={this.props.arial_label}
          rel="noopener noreferrer"
          className="icon icon-network"
        >
          <span>
            {this.props.icon}
          </span>
        </a>
    )
  }
}
