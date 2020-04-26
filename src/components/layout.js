import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import SEO from "./seo";
import "./layout.scss";

import NavBar from "./Menu/";
import Footer from "./Footer/";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <SEO
          title="Julián Duque - Delevoper and Educator"
          keywords={[`Julián Duque`, `Developer and educator`]}
        />
        <div className="app-layout">
          <NavBar />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
