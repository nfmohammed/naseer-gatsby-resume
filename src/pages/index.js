import React from "react";
import 'typeface-roboto';
import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionResumeExperienceSkills from "../components/resume-section-experience-skills";
import SectionResumeSummaryContact from "../components/resume-section-summary-contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Naseer" />
    <SectionResumeSummaryContact />    
    <SectionResumeExperienceSkills />    
  </Layout>
)

export default IndexPage