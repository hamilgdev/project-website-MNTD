import React from 'react';

import './index.scss';

class Network extends React.Component {
  constructor(name){
    super(name)
    this.name = name
  }
  render(){
    const name = this.props.name
    if(name === 'menu-network'){
      return(
        <a
          title={this.props.title}
          href={this.props.url}
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={this.props.arialLabel}
          className={`icon icon-network ${this.props.name}`}
          >
          <span>
            {this.props.icon}
          </span>
        </a>
      );
    }else if(name === 'about-network'){
      return (
        <div className={`content-network ${this.props.name}`}>
          <span 
            title={this.props.title}
            className="icon icon-network"
          >
            {this.props.icon}
          </span>
          <a
            href={this.props.url}
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={this.props.arialLabel}
            className="nickname-network"
            >
              {this.props.nickname}
          </a>
        </div>
      )
    }
  }
}

export default Network;