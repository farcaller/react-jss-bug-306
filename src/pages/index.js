import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Landing from '../components/landing';


class IndexPage extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Header
        title={data.site.siteMetadata.index.title}
        description={data.site.siteMetadata.index.description}
        backdrop={data.headerImage.childImageSharp.fluid.src}
      >
        <Landing/>
      </Header>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "background-calm-clouds-747964.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    site {
      siteMetadata {
        index {
          title
          description
        }
      }
    }
  }
`
