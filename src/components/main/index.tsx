import React from "react";
import SideNavBar from "../common/sidebar";

import { Container, MainContainer, MainContent, MainContentTitle, MainfillterButtons, SideNavBarContianer, Wrapper } from "./styles";

const Main: React.FC = () => (

  <Container>
    <Wrapper>

      <SideNavBarContianer>
        <SideNavBar>

        </SideNavBar>
      </SideNavBarContianer>
      
      <MainContainer>

        <MainContentTitle>
          Top Questions
        </MainContentTitle>
          
        <MainfillterButtons>
          filler buttons
        </MainfillterButtons>

        <MainContent>
        </MainContent>

      </MainContainer>
    </Wrapper>
  </Container>
  
);

export default Main;
