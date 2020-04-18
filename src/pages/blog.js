import React from "react";

import Blog from "../components/Blog";
import Layout from "../components/layout";

import "./styles.scss";

class BlogPage extends React.Component {
 
  render() {
    return (
    <Layout>
      <Blog />
    </Layout>
    )
  }
}

export default BlogPage;
