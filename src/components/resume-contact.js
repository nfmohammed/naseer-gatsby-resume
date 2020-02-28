import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, Link } from '@material-ui/core';
import { useStaticQuery, graphql } from "gatsby"
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
}));

const icons = {
  "mail": <MailIcon />,
  "github": <GitHubIcon />,
  "linkedin": <LinkedInIcon />,
  "twitter": <TwitterIcon />
}

export default function ResumeContact() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allContactJson {
        edges {
          node {
            id
            type
            value
            href
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <List>
        <Typography component="p">
          {data.allContactJson.edges.map(s => (
            <Link href={s.node.href} underline="hover" rel="noopener noreferrer" target="_blank" color="inherit">
              <ListItem button >
                <ListItemText>{icons[s.node.type]}</ListItemText>
                <Typography component="span">{s.node.value}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </Typography>
      </List>
    </div>
  );
}