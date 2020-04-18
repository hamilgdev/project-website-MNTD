import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

import NavBar from "./Menu/"
import Footer from "./Footer/"

const Layout = ({ children }) => {

  return (
    <>
    <div className="app-layout">
      <NavBar />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
