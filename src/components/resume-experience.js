import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { useStaticQuery, graphql } from "gatsby"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2),
  },
  inline: {
    display: 'inline',
  },
  avatarItem: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "inline"
    }
  },
  greenAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: green[500]
  }
}));

export default function ResumeExperience() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allExperienceJson {
        edges {
          node {
            id
            position
            company
            duration
            description
          }
        }
      }
    }
  `)

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" component="h3">
        Work Experience
        </Typography>
      <List>
        <div>
          {data.allExperienceJson.edges.map(s => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar className={classes.avatarItem}>
                <Avatar className={classes.greenAvatar} src="static/images/expedia-logo.jpg">
                  
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary=
                  {<Typography
                      component="span"
                      variant="h6"
                    >
                  {s.node.position}
                  </Typography>

                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body1"
                      className={classes.inline}
                      color="textPrimary"
                      paddingBottom={100}
                    >
                      {s.node.company}
                    </Typography>
                    - {s.node.duration}

                    <Typography
                      variant="body2"
                      color="textPrimary">
                        <List dense="true">
                          {s.node.description.map(d =>(
                            <React.Fragment>
                            <ListItem button>
                              <ListItemText>{d}</ListItemText>
                            </ListItem>
                            <Divider/>
                            </React.Fragment>
                          ))}
                        </List>
                      
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </div>
      </List>
    </Paper>
  );
}