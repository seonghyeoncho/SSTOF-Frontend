import React from "react";
import SideNavBar from "../sidebar";
import FilteredQuestions from "../questionTile";
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
          <FilteredQuestions filter={"filter"}/>
        </MainContent>

      </MainContainer>
    </Wrapper>
  </Container>
  
);

export default Main;
