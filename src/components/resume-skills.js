import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Rating from 'material-ui-rating'
import { useStaticQuery, graphql } from "gatsby"
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allSkillJson {
        edges {
          node {
            id
            skill
            selfRating
          }
        }
      }
    }
  `)

  return (
    <Paper className={classes.root}>
      <List component="nav">
          {data.allSkillJson.edges.map(s => (
            <ListItem button>
              <ListItemText>{s.node.skill}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}