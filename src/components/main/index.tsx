import React from "react";
import SideNavBar from "../sidebar";
import { Container, MainContainer, MainContent, MainContentTitle, MainfillterButtons, SideNavBarContianer } from "./styles";

const Main: React.FC = () => (

  <Container>

    <SideNavBarContianer>
      <SideNavBar>

      </SideNavBar>

    </SideNavBarContianer>
    
    <MainContainer>

      <MainContentTitle>
        카테고리
      </MainContentTitle>
        
      <MainfillterButtons>
        filler buttons
      </MainfillterButtons>

      <MainContent>

      </MainContent>
      

    </MainContainer>

  </Container>
  
);

export default Main;
