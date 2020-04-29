import React from "react"
import { Link } from 'gatsby'
import Logo from "../../images/svg/logo.svg";
import { networks } from "../constants/networks";
import Network from "./Network"

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
      <a href="/" aria-label="logo-mobile" className="logo logo-mobile">
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
          <Network {...networks.twitter} />
          <Network {...networks.twitch} />
          <Network {...networks.youtube} />
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
