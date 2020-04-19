import React from "react";

import Article from "../components/Blog/Article";
import Layout from "../components/layout";

import "./styles.scss";

class ArticlePage extends React.Component {
 
  render() {
    return (
    <Layout>
      <Article />
    </Layout>
    )
  }
}

export default ArticlePage;
