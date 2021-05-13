import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;

  position: fixed;
  top: 0px;
  @media ${(props) => props.theme.desktop} {
    border-bottom: solid 1px #909090;

    background-color: #4e4e4e;
  }
  @media ${(props) => props.theme.tablet} {
  }

  @media ${(props) => props.theme.mobile} {
    height: 50px;
    width: 100%;

    position: fixed;

    border-bottom: solid 1px #909090;

    background-color: #4e4e4e;

    padding: 0px 16px;
  }
`;

export const Wrapper = styled.div`
  @media ${(props) => props.theme.desktop} {
    max-width: 1440px;
    height: 100%;

    display: flex;
    justify-content: space-between;

    margin: 0px auto;
  }
  @media ${(props) => props.theme.mobile} {
    display: flex;
  }

  margin: 0px auto;
`;

export const TitleContainer = styled.div`
  background-color: transparent;
  border: none;

  @media ${(props) => props.theme.desktop} {
    display: flex;
    align-items: center;
    a {
      display: flex;
    }
  }
`;
export const TitleImage = styled.div`
  width: 32px;
  height: 32px;

  margin: auto;
  margin-left: 0px;
  margin-right: 6px;

  background-color: #1b7ebc;
  @media ${(props) => props.theme.mobile} {
    margin: auto;
  }
`;
export const Title = styled.div`
  font-size: 27px;
  font-weight: bold;

  color: white;

  margin: auto;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const InputContainer = styled.div`
  @media ${(props) => props.theme.desktop} {
    display: flex;
    align-items: center;

    width: 100%;

    border-radius: 40px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
export const InputImage = styled.image`
  width: 32px;
  height: 32px;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 70%;

  border-radius: 40px;
  border: none;

  opacity: 0.5;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  margin: auto 0px;
  margin-left: 24px;
  display: flex;
  justify-self: right;
`;
export const UserLinkButton = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 5px;
  border: none;

  margin-right: 10px;
`;
export const MyQuestionsLinkButton = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 5px;
  border: none;

  margin-right: 10px;
`;
export const InstructionLinkButton = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 5px;
  border: none;
`;
