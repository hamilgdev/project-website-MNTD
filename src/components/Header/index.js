import PropTypes from "prop-types"
import React from "react"

import "./Header.scss"

const Header = () => (

  <header className="header">

    <h1 className="">
      Developer Advocate at Heroku
    </h1>

    <a href="#" className="btn-cta">visit</a>

  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
