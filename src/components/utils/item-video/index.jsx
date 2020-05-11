import React from 'react';
import PropTypes from 'prop-types';

import IconEye from '../../../assets/svg/icons/icon-eye.svg';
import './index.scss';

class ItemVideo extends React.Component {
  constructor(titleItem){
    super(titleItem)
    this.title = titleItem
  }

  render(){
    return(
      <button className='item-video'>
        <span className="icon icon-eye">
          <IconEye />
        </span>
        {this.props.titleItem}
      </button>
    );
  }
}

ItemVideo.propTypes = {
  title : PropTypes.string
}

ItemVideo.defaultProps = {
  title : "title item"
}

export default ItemVideo;