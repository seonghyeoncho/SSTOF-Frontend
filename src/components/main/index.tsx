import React, { useEffect } from "react";
import SideNavBar from "../common/sidebar";
import { useLocation } from "react-router";
import { Container, MainContainer, MainContent, MainContentTitle, MainfillterButtons, SideNavBarContianer, Wrapper } from "./styles";

const Main: React.FC = () => {

    const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const accessToken = query.get("accessToken");
    const refreshToken = query.get("refreshToken");
    if (!!accessToken && !!refreshToken) {
      localStorage.setItem("AccessToken", accessToken);
      localStorage.setItem("RefreshToken", refreshToken);
      window.location.href = "/";
    }
  }, [location]);
  return (
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
};

export default Main;
