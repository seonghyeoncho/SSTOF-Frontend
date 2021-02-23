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
  border: 1px solid #d5d5d5;
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
  margin-bottom: 8px;
`;

export const SubText = styled.div`
  color: white;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 300px;
  margin-top: 10px;
  transition: all 0.2s ease;
  font-size: 15px;
  line-height: 2;
  text-align: left;
  &:focus {
    background-color: lightgray;
    border-bottom: 2px solid ${(props) => props.theme.hoverBlueColor};
  }
`;

export const InputTitle = styled.div`
  font-size: 13px;
  margin-left: 40px;
  color: white;
  margin-top: 5px;
  align-self: flex-start;
`;
