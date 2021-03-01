import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  width: 100%;
  display: flex;
  align-content: center;
`;

export const SignupContainer = styled.div`
  background-color: ${(props) => props.theme.onFocusBackgroundColor};
  width: 375px;
  border-radius: 10px;
  overflow: hidden;
`;

export const InformationContainer = styled.form`
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  align-items: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
`;

export const MainText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.45;
  margin-top: 5px;
  margin-bottom: 8px;
`;

export const SubText = styled.div`
  color: white;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const Input = styled.input<{ isValid: boolean }>`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 300px;
  margin-top: 10px;
  transition: all 0.2s ease;
  font-size: 15px;
  line-height: 2;
  text-align: left;
  border: ${(props) =>
    props.isValid === true
      ? `1px solid ${props.theme.greenColor}`
      : `1px solid ${props.theme.redColor}`};
  &:focus {
    background-color: lightgray;
    border-bottom: 2px solid ${(props) => props.theme.blueColor};
  }
`;

export const InputTitle = styled.div`
  font-size: 13px;
  margin-left: 40px;
  color: white;
  margin-top: 9px;
  align-self: flex-start;
`;

export const SignUpButton = styled.button`
  width: 300px;
  color: white;
  text-align: center;
  margin: 34px 0 15px 0;
  border-radius: 15px;
  line-height: 1.7;
  font-weight: bold;
  background-color: ${(props) => props.theme.blueColor};
  &:hover {
    cursor: pointer;
  }
`;

export const SignupWithGithubButton = styled(Link)`
  width: 300px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border-radius: 15px;
  line-height: 1.7;
  font-weight: bold;
  background-color: rgb(55, 65, 81);
  &:hover {
    cursor: pointer;
  }
`;

export const TestSignupWithGithubButton = styled.div`
  width: 300px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border-radius: 15px;
  line-height: 1.7;
  font-weight: bold;
  background-color: rgb(55, 65, 81);
  &:hover {
    cursor: pointer;
  }
`;

export const GithubImage = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  align-self: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  justify-self: flex-start;
  margin-right: 5px;
`;

export const ButtonText = styled.div`
  font-weight: bold;
  color: white;
`;

export const SmallText = styled.div`
  font-size: 9px;
  margin-left: 40px;
  color: white;
  margin-top: 9px;
  align-self: flex-start;
`;
