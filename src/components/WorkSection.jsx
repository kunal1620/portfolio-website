import React from "react";
import styled from "styled-components";

import Colors from "../constants/Colors";

const WorkSection = ({ companyName, jobTitle, duration, jobDescription }) => (
  <SectionContainer>
    <CompanyName>{companyName}</CompanyName>
    <JobDetails>
      {jobTitle} | {duration}
    </JobDetails>
    <JobDescription>{jobDescription}</JobDescription>
  </SectionContainer>
);

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0px;
  padding-left: 20px;
  border-left: 3px solid ${Colors.highlight};
  margin-bottom: 70px;
`;

const CompanyName = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 0.75;
`;

const JobDetails = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-block-start: 15px;
`;

const JobDescription = styled.p`
    font-size 16px;
    margin-bottom: 0px;
    font-weight: 400;
    text-align: justify;
`;

export default WorkSection;
