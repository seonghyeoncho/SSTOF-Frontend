import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Wrapper = styled.div`
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 100%;
    max-width: 1440px;

    display: flex;
    flex-direction: column;
  }
`;

export const AskContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const AskTitle = styled.div`
  font-size: 27px;
  color: white;
  font-weight: bold;
`;

export const AskContainer = styled.div`
  background-color: ${theme.mainColor};

  border-radius: 5px;

  color: white;
  @media ${(props) => props.theme.desktop} {
    margin-top: 48px;
    width: 1090px;
    height: 100%;
    padding: 10px;
  }
`;
export const AskRightSiedBarContainer = styled.div`
  @media ${(props) => props.theme.desktop} {
    margin-top: 48px;
    height: 100px;
    width: 300px;
    background-color: #363636;
    margin-left: 30px;
    border-radius: 5px;
  }
`;
export const AskTitleInputContainer = styled.div`
  padding-right: 10px;
  margin-bottom: 30px;
`;
export const AskTitleInputText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const AskTitleInput = styled.input`
  @media ${(props) => props.theme.desktop} {
    height: 34px;
    width: 100%;

    border: none;
    border-radius: 5px;

    padding: 5px;

    outline: none;
    color: white;

    background-color: #363636;

    font-size: 16px;
  }
`;

export const AskBodyContainer = styled.div`
  color: white;
  & > h1 {
    color: white;
  }
`;
export const AskBodyText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const HowToUseMDLink = styled.div``;
export const AskBodyTextArea = styled.div`
  padding-right: 10px;
`;
export const AskPreviewContainer = styled.div`
  color: white;
  margin-bottom: 30px;
  padding: 5px;
 
`;
export const AskPreviewContent = styled.pre`
  /* color: white; */
  overflow-y: hidden;
`;

export const SelectAskTagsContainer = styled.div`
  padding-right: 10px;
`;
export const SelectAskTagsTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const SelectAskTagsInput = styled.input`
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 34px;
    background-color: #363636;
    border: none;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    color: white;
    font-size: 16px;
  }
`;

export const AskPostButtonContainer = styled.div`
  margin-top: 30px;
  width: 200px;
  height: 60px;
`;
export const AskPostButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #1b7ebc;
  border: none;
  border-radius: 5px;

  color: white;

  font-weight: bold;

  font-size: 18px;

  font-family: "Noto Sans KR", sans-serif;
`;
