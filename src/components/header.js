import withStyles from '@material-ui/core/styles/withStyles';
import indexPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import classNames from 'classnames';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import React from 'react';
import PageChrome from '../components/page_chrome';


class Header extends React.Component {
  render() {
    const { classes, children, title, description, backdrop } = this.props;
    return (
      <PageChrome>
        <Parallax filter image={backdrop}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{title}</h1>
                <h4>{description}</h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {children}
          </div>
        </div>
        
      </PageChrome>
    );
  }
}

export default withStyles(indexPageStyle)(Header);
