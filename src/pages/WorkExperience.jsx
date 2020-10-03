import React from "react";
import styled from "styled-components";

import PageContainer from "../components/reusable/PageContainer";
import Container from "../components/reusable/Container";
import WorkSection from "../components/WorkSection";
import Colors from "../constants/Colors";

const WorkExperience = (props) => {
  const resorterDescription = `Started as an intern and subsequently joined the team as a part-time 
  full-stack developer.  Utilised React.Js and Node to develop a travel booking website. Implemented 
  booking flow as well as payment gateway using Stripe API`;

  return (
    <PageContainer>
      <WorkExperienceContainer>
        <WorkSection
          companyName="Resorter"
          jobTitle="Fullstack Developer"
          duration="Aug 2019 - Feb 2020"
          jobDescription={resorterDescription}
        />

        <WorkSection
          companyName="Nividous"
          jobTitle="Software Engineer"
          duration="Aug 2019 - Feb 2020"
          jobDescription={resorterDescription}
        />

        <WorkSection
          companyName="Harptec"
          jobTitle="Junior Java Developer"
          duration="Aug 2019 - Feb 2020"
          jobDescription={resorterDescription}
        />
      </WorkExperienceContainer>
    </PageContainer>
  );
};

const WorkExperienceContainer = styled(Container)`
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 50px 0px 0px 100px;
  overflow: auto;
`;

export default WorkExperience;
