/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import Header from "./header"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  layoutStyle: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`
  }
}));

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles();
  return (
    
    <div className={classes.layoutStyle}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
