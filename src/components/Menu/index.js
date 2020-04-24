import React from "react"
import { navigate, Link } from 'gatsby'
import Logo from "../../images/svg/logo.svg";
import IconTwitter from "../../images/svg/icons/icon-twitter.svg";
import IconTwitch from "../../images/svg/icons/icon-twitch.svg";
import IconYoutube from "../../images/svg/icons/icon-youtube.svg";

import "./menu.scss"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenuActive: false,
      animateBarMenu: false
    }
  }

  activeMobile = e => {
    this.handleToggleMenu()
  }

  handleToggleMenu = () => {
    this.setState({ 
      mobileMenuActive: !this.state.mobileMenuActive,
      animateBarMenu: !this.state.animateBarMenu
    })
  }

  activeClass = () => {
    return this.state.mobileMenuActive ? "open" : "close"
  }

  animateClass = () => {
    return this.state.mobileMenuActive ? "animate-bar" : ""
  }

  render() {
    return (
      
    <aside className="aside" id="aside">

      <a href="/" className="logo logo-mobile">
        <Logo />
      </a>

      <nav className={`main-nav ${this.activeClass()}`}>
        <ul className="main-menu" id="main-menu">

          <li className="main-menu__item">
            <Link 
              className="main-menu__link" 
              to="/"
              onClick={e => this.activeMobile(e)}
              activeClassName="active"
            >
              home
            </Link>
          </li>
          <li className="main-menu__item">
            <Link 
              className="main-menu__link" 
              to="/mntd"
              onClick={e => this.activeMobile(e)}
              activeClassName="active"
            >
              mntd
            </Link>
          </li>
          <li className="main-menu__item">
            <Link 
              className="main-menu__link" 
              to="/about"
              onClick={e => this.activeMobile(e)}
              activeClassName="active"
            >
              about
            </Link>
          </li>
          <li className="main-menu__item">
            <Link 
              className="main-menu__link" 
              to="/talks"
              onClick={e => this.activeMobile(e)}
              activeClassName="active"
            >
              talks
            </Link>
          </li>
          <li className="main-menu__item">
            <Link 
              className="main-menu__link" 
              to="/blog"
              onClick={e => this.activeMobile(e)}
              activeClassName="active"
            >
              blog
            </Link>
          </li>
        </ul>
      
        <div className="network-menu">
          <a href="#" className="icon icon-network">
            <span className="icon-twitter">
              <IconTwitter />
            </span>
          </a>
          <a href="#" className="icon icon-network">
            <span className="icon-twitter">
              <IconTwitch />
            </span>
          </a>
          <a href="#" className="icon icon-network">
            <span className="icon-twitter">
              <IconYoutube />
            </span>
          </a>
        </div>
      </nav>
    
      <button
        className="btn-menu"
        id="btn-menu"
        aria-label="button-menu"
        onClick={e => this.activeMobile(e)}
      >
        <span className={`icon-bar ${this.animateClass()}`}>
        </span>
      </button>

    </aside>
    )
  }
}

export default Menu
