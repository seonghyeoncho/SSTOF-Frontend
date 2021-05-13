import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  @media ${(props) => props.theme.desktop} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    max-width: 1440px;

    display: flex;
    justify-content: space-between;
  }
`;
export const SideNavBarContianer = styled.div`
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
export const QuestionsContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;

  padding: 24px;

  background-color: #4e4e4e;
  color: white;

  margin-left: 183px;
  @media ${(props) => props.theme.mobile} {
    background-color: transparent;
  }
`;
export const Title = styled.div`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 24px;
`;
export const AskButtonContainer = styled.div`
  color: black;
`;
export const AskButton = styled.button`
  width: 167px;
  height: 37px;
  border: none;

  border-radius: 5px;

  background-color: white;

  font-size: 20px;
`;
