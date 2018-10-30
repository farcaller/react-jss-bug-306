import { cardTitle } from "assets/jss/material-kit-react.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';


const style = {
  cardTitle,
};


class Book extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Header
        title="This page breaks it all"
        description=""
        backdrop={data.headerImage.childImageSharp.fluid.src}
      >
        <GridContainer justify="center">
        </GridContainer>
      </Header>
    );
  }
}

export default Book;

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "book-book-pages-browse-267586.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
