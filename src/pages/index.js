import React from "react";
import 'typeface-roboto';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import SectionResumeExperienceSkills from "../components/resume-section-experience-skills";
import SectionResumeSummaryContact from "../components/resume-section-summary-contact";

function pxToRem(value) {
  return `${value / 16}rem`;
}

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  palette: {
  },
  breakpoints,
  overrides: {
    MuiAppBar: {
      colorDefault: {
        color: '#000',
        backgroundColor: '#000',
      }
    },
    MuiSvgIcon: {
      root: {
        width: pxToRem(14),
        [breakpoints.up("md")]: {
          width: pxToRem(21)
        }
      }
    },
    MuiTypography: {
      title: {
        fontSize: pxToRem(21),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(24)
        }
      },
      h6: {
        fontSize: pxToRem(14),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(16)
        }
      },
      body1: {
        fontSize: pxToRem(14),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(16)
        }
      }
    }
  },
  
});

const IndexPage = () => (
  <MuiThemeProvider theme={theme}>
    <Layout>
      <SEO title="Naseer" />
      <SectionResumeSummaryContact />
      <SectionResumeExperienceSkills />
    </Layout>
  </MuiThemeProvider>

)


export default IndexPage