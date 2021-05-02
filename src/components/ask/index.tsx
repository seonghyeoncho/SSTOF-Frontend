import React from "react";
import { 
  AskContainer,
  Container,
  PageTitle,
  PageTitleContainer,
  SideHelpBar,
  Wrapper,
} from "./styles";

const AskQuestion: React.FC = () => (
  <Container>
    <Wrapper>
      <PageTitleContainer>
        <PageTitle>Ask Question!</PageTitle>
      </PageTitleContainer>
      <AskContainer>
      </AskContainer>
      <SideHelpBar>
        
      </SideHelpBar>

    </Wrapper>
  </Container>
);

export default AskQuestion;
