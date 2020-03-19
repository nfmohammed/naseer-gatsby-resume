import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResumeExperience from './resume-experience';
import ResumeSkills from './resume-skills';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    textAlign: 'center',
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SectionResumeExperienceSkills() {
  const classes = useStyles();

  return (
    
    <Container>
      <div className={classes.root}>
      <Grid container justify="flex-end" spacing={3}>
        <Grid item xs={12} sm={12} md={9} lg={8}>
          <ResumeExperience />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <ResumeSkills />
        </Grid>

      </Grid>
      </div>
    </Container>
    
  );
}