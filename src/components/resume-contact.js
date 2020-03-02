import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { useStaticQuery, graphql } from "gatsby"
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 360,
    display: 'flex'
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
            {data.allContactJson.edges.map(s => (
              <Link href={s.node.href} underline="hover" rel="noopener noreferrer" target="_blank" color="inherit">
                  <IconButton color="inherit">
                    <Badge color="secondary">
                {icons[s.node.type]}
            </Badge>
          </IconButton>
              </Link>
            ))}
      </div>
  );
}