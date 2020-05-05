import React from 'react';

import './index.scss';

class CardListVideo extends React.Component {
  
  constructor(title, subtitle, elements, name){
    super(title, subtitle, elements, name)
    this.title = title
    this.subtitle = subtitle
    this.elements = elements
    this.name = name
  }
  render(){
    return(
    <div className={`card card-container ${this.props.name}`}>
      <div className="card-data">
        <h2 className="card-title">{this.props.title}</h2>
        <p className="card-subtitle">{this.props.subtitle}</p>
      </div>
      <hr className="separator" />
      <div className="card-elements">
          {this.props.elements}
      </div>
    </div>
    );
  }
}

export default CardListVideo;