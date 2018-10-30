import withStyles from "@material-ui/core/styles/withStyles";
import School from "@material-ui/icons/School";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import React from "react";


class Landing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk bugs</h2>
            <h5 className={classes.description}>bugs suck.</h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title={<a href="https://github.com/cssinjs/react-jss/issues/306">bug</a>}
                description="this is the bug."
                icon={School}
                iconColor="success"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(Landing);
