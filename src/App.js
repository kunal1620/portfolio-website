import React from "react";
import styled from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import { Switch, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import WorkExperience from "./pages/WorkExperience";
import Portfolio from "./pages/Portfolio";
import CustomToast from "./components/CustomToast";

import "./App.css";

function App() {
  return (
    <ToastProvider
      components={{ Toast: CustomToast }}
      autoDismiss
      autoDismissTimeout={3000}
      placement="bottom-center"
    >
      <MainContainer>
        <SideBar />

        {/* Section for NavBar and Pages */}
        <PageSection>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/work-experience" component={WorkExperience} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </PageSection>
      </MainContainer>
    </ToastProvider>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justifycontent: center;
  alignitems: center;
  font-family: hind-vadodara;
`;

const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  height: 100%;
  justifycontent: center;
  alignitems: center;
`;

export default App;
