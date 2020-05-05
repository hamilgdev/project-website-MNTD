import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Button extends React.Component {
  constructor(name, href, target, texto){
    super(name, href, target, texto)
    this.name = name
    this.href = href
    this.target = target
    this.texto = texto
  }

  render(){
    return(
      <a
        className={`btn ${this.props.name}`}
        href={this.props.href}
        target={this.props.target}
        rel="noopener noreferrer"
      >
        {this.props.texto}
      </a>
    );
  }
}

Button.propTypes = {
  name : PropTypes.string,
  href : PropTypes.string,
  target : PropTypes.string,
  texto : PropTypes.string
} 

Button.defaultProps = {
  name : "btn-default",
  href : "#",
  target : "_self",
  texto : "Button"
} 

export default Button;