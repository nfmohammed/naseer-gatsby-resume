import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStaticQuery, graphql } from "gatsby"
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  content: {
    textAlign: "left",
  },
  listStyle: {
    padding: 0
  },
  listItemStyle: {
    margin: 0,
    padding: 0
  }
}));


export default function SimpleList() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allSkillJson {
        edges {
          node {
            category
            info
          }
        }
      }
    }
  `)

  return (
    <Paper className={classes.root}>
      {data.allSkillJson.edges.map(s => (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {s.node.category}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {s.node.info.map(infoItem => (
              <List className={classes.listStyle}>
                  <ListItem className={classes.listItemStyle}>
                    <ListItemText>
                    <Typography variant="bod1">
                      {infoItem}
                      </Typography>
                    </ListItemText>
                  </ListItem>
            </List>
            ))}
          </Typography>
        </CardContent>
      </Card>
      ))}
    </Paper>
  );
}