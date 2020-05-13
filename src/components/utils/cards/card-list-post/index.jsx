import React from 'react';

import './index.scss';

class CardListPost extends React.Component {
  constructor(name, titleList, elements){
    super(name, titleList, elements)
    this.name = name
    this.titleList = titleList
    this.elements = elements
  }

  render(){
    return(
      <div className={`card-post ${this.props.name}`}>
        <h4 className="card-post__title">{this.props.titleList}</h4>
        <ul className="card-post__elements">
          {this.props.elements}
        </ul>
      </div>
    );
  }
}

export default CardListPost;