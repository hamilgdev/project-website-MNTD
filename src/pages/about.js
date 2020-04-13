import React from "react";
import Layout from "../components/layout";
import About from "../components/About";

import "./styles.scss";

class AboutPage extends React.Component {
 
  render() {
    return (
      <Layout>
          <About />
      </Layout>
    );
  }
}

export default AboutPage;
