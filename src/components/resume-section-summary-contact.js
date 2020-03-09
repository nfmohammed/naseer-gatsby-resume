import React from 'react';
import ResumeSummary from './resume-summary';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';


export default function SectionResumeSummaryContact() {
  return (
    <Container maxWidth="lg">
    <Paper>
      <ResumeSummary />
    </Paper>
    </Container>
  );
}