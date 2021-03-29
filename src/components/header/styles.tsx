import styled from 'styled-components';

export const Container = styled.div`

    height: 50px;
    width: 100%;

    position: fixed;
    top: 0px;

    display: grid;
    grid-template-columns: 1fr 1080px 1fr;

    border-bottom: solid 1px #909090;

    background-color: #4e4e4e;

`;

export const Wrapper = styled.div`

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns : 1fr 5fr 1fr;

`;


export const TitleContainer = styled.div`

    height: 100%;

    display: flex;

`;
export const TitleImage = styled.div`

    width: 32px;
    height: 32px;

    margin: auto;
    margin-left: 0px;
    margin-right: 6px;

    background-color: #1B7EBC;

`;
export const Title = styled.button`

    font-size:27px;
    font-weight: bold;

    border:none;

    background-color: transparent;
    color: white;
    
`;

export const InputContainer = styled.div`

    display: flex;
    align-items: center;

    border-radius: 40px;
    
`;
export const InputImage = styled.image`

    width: 32px;
    height: 32px;
    
`;
export const Input = styled.input`

    width: 100%;
    height: 70%;

    border-radius: 40px;
    border: none;

    opacity: 0.5;

`;

export const ButtonContainer = styled.div`

    margin: auto 0px;

    display: flex;
    justify-self: right;

`;
export const UserLinkButton = styled.button`

    width: 30px;
    height:30px;

    border-radius: 5px;
    border: none;

    margin-right: 10px;

`;
export const MyQuestionsLinkButton = styled.button`

    width: 30px;
    height:30px;

    border-radius: 5px;
    border: none;

    margin-right: 10px;

`;
export const InstructionLinkButton = styled.button`

    width: 30px;
    height:30px;

    border-radius: 5px;
    border: none;


`;
