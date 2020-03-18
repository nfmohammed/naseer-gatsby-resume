import React from "react"
import PropTypes from "prop-types"

import ResumeContact from './resume-contact';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  headerStyle: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0rem 1.0875rem 1.0875rem`
  }
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerStyle}>
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          {siteTitle}
        </Typography>
        <ResumeContact />
      </Toolbar>
    </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
