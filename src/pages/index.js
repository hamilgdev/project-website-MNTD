import React from "react";
import Layout from "../components/layout";
import Home from "../components/Home";
import "./styles.scss";

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default IndexPage;
