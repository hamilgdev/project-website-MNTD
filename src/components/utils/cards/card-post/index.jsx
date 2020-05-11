import React from 'react';
import PropTypes from 'prop-types';

import IconRowLeft from "../../../../assets/svg/icons/icon-rowleft.svg";
import IconRead from "../../../../assets/svg/icons/icon-read.svg";
import './index.scss';

class CardPost extends React.Component {
  constructor(nameList, namePost, url, title, descrition){
    super(nameList, namePost, url, title, descrition)
    this.nameList = nameList
    this.namePost = namePost
    this.url = url
    this.title = title
    this.descrition = descrition
  }

  render(){
    const nameList = this.props.nameList
    if(nameList==="input-post"){
      return(
        <a 
          className={`${this.props.nameList}`}
          href={this.props.url}
          target="_self"
          rel="noopener noreferrer"
          aria-label="posts"
        >
          <article className={`post-article ${this.props.namePost}`}>
            <h2 className="post-article__title">
              {this.props.title}
            </h2>
            <p className="post-article__description">
              {this.props.description}
            </p>
            <div className="icon icon-blog">
              <span className="icon-read">
                <IconRead />
              </span>
            </div>
          </article>
        </a>
      );
    }else if(nameList==="out-post"){
      return(
        <a 
          className={`${this.props.nameList}`}
          href={this.props.url}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="posts"
        >
          <span className="icon-rowleft">
            <IconRowLeft />
          </span> 
          {this.props.title}
        </a>
      );
    }
  }
}

CardPost.propTypes = {
  nameList : PropTypes.string,
  namePost : PropTypes.string,
  url : PropTypes.string,
  title : PropTypes.string,
  descrition : PropTypes.string
}

CardPost.defaultProps = {
  nameList : "input-post",
  namePost : "",
  url : "#",
  title : "title post",
  descrition : "description post"
}

export default CardPost;