import withStyles from "@material-ui/core/styles/withStyles";
import { cardTitle } from "assets/jss/material-kit-react.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { graphql } from 'gatsby';
import React from 'react';
import Header from '../components/header';


const style = {
  cardTitle,
};


class Research extends React.Component {
  render() {
    const { classes, data } = this.props;
    let articles = [];
    return (
      <Header
        title="Research"
        description=""
        backdrop={data.headerImage.childImageSharp.fluid.src}
      >
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            {articles.map((a) =>
            <Card key={a.link}>
              {/* <CardHeader color="info">{a.author}</CardHeader> */}
              <CardBody>
                <h4 className={classes.cardTitle}>{a.title}</h4>
                <h6>by {a.author}</h6>
                <p>{a.text}</p>
                <a target="_blank" rel="noopener noreferrer" href={a.link}><Button color="primary">Read the paper</Button></a>
              </CardBody>
            </Card>
            )}
          </GridItem>
        </GridContainer>
      </Header>
    );
  }
}

export default withStyles(style)(Research);

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "book-books-bookshelf-159621.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
