import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class CardListVideo extends React.Component {
  
  constructor(titleList, subtitle, elements, name){
    super(titleList, subtitle, elements, name)
    this.titleList = titleList
    this.subtitle = subtitle
    this.elements = elements
    this.name = name
  }
  render(){
    return(
    <div className={`card ${this.props.name}`}>
      <div className="card-data">
        <h2 className="card-title">{this.props.titleList}</h2>
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

CardListVideo.propTypes = {
  titleList : PropTypes.string,
  subtitle : PropTypes.string,
  elements : PropTypes.string,
  name : PropTypes.string
}

CardListVideo.defaultProps = {
  titleList : "title list",
  subtitle : "subtitle list",
  elements : "elements is here",
  name : ""
}


export default CardListVideo;