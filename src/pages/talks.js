import React from "react";

import Layout from "../components/layout";
import Talks from "../components/Talks";
import "./styles.scss";

class TalksPage extends React.Component {
  render() {
    return (
      <Layout>
        <Talks />
      </Layout>
    );
  }
}

export default TalksPage;
