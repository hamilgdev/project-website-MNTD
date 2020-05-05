import React from 'react';

class Network extends React.Component {
  render(){
    return(
      <a
        title={this.props.title}
        href={this.props.url}
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={this.props.arialLabel}
        className="icon icon-network"
        >
        <span>
          {this.props.icon}
        </span>
      </a>
    );
  }
}

export default Network;