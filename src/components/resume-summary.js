import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    padding: `1rem 2rem`,
    maxWidth: 960
  },
}));

export default function ResumeSummary() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
  query {
    allSummaryJson {
      edges {
        node {
          id
          summary
        }
      }
    }
  }
  `)

  return (
      <Box className={classes.root}>
        <Typography variant="h6" component="h3">
          About Me
        </Typography>

        <Typography component="p">
          {data.allSummaryJson.edges.map(s => (
            <div key={s.node.id} style={{ paddingTop: 22 }}>
              {s.node.summary}
            </div>
          ))}
        </Typography>
      </Box>
  );
}

