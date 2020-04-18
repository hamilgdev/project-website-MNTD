import React from "react"
import { navigate, Link } from 'gatsby'
import Logo from "../../images/svg/logo.svg";
import BtnMenu from "../../images/svg/icons/icon-menubar.svg";
import IconTwitter from "../../images/svg/icons/icon-twitter.svg";
import IconTwitch from "../../images/svg/icons/icon-twitch.svg";
import IconYoutube from "../../images/svg/icons/icon-youtube.svg";

import "./menu.scss"

class Menu extends React.Component {

  render() {
    return (
      
    <aside className="aside" id="aside">

      <a href="/" className="logo logo-mobile">
        <Logo />
      </a>

      <nav className="main-nav">
        <ul className="main-menu" id="main-menu">

          <li className="main-menu__item">
            <Link className="main-menu__link" to="/">
              home
            </Link>
          </li>
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/mntd">
              mntd
            </Link>
          </li>
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/about">
              about
            </Link>
          </li>
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/talks">
              talks
            </Link>
          </li>
          <li className="main-menu__item">
            <Link className="main-menu__link" to="/blog">
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
      >
        <span className="icon-bar">
          <BtnMenu />
        </span>
      </button>

    </aside>
    )
  }
}

export default Menu
