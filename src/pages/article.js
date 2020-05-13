import React from "react";

import Post from "../components/Blog/Post";
import Layout from "../components/layout";

import "./styles.scss";

class ArticlePage extends React.Component {
 
  render() {
    return (
    <Layout>
      <Post />
    </Layout>
    )
  }
}

export default ArticlePage;
