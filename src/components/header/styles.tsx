import styled from 'styled-components';

export const Container = styled.div`

    @media ${props => props.theme.desktop} {
        height: 50px;
        width: 100%;

        position: fixed;
        top: 0px;

        display: grid;
        grid-template-columns: 1fr 1080px 1fr;
        gap: 24px;

        border-bottom: solid 1px #909090;

        background-color: #4e4e4e;
    }
    @media ${props => props.theme.tablet} {
    }
    @media ${props => props.theme.mobile} {

        height: 50px;
        width: 100%;

        border-bottom: solid 1px #909090;

        background-color: #4e4e4e;

        padding: 0px 16px;

    }

`;

export const Wrapper = styled.div`

    
    @media ${props => props.theme.desktop} {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns : 5fr 1fr;
    }
    @media ${props => props.theme.mobile} {
        
    }

`;


export const TitleContainer = styled.div`

    height: 100%;

    display: flex;
    justify-self: right;

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
    
    @media ${props => props.theme.mobile} {
        display: none;
    }
`;

export const InputContainer = styled.div`

    display: flex;
    align-items: center;

    border-radius: 40px;
    @media ${props => props.theme.mobile} {
        display: none;
    }
    
`;
export const InputImage = styled.image`

    width: 32px;
    height: 32px;
    @media ${props => props.theme.mobile} {
        display: none;
    }
    
`;
export const Input = styled.input`

    width: 100%;
    height: 70%;

    border-radius: 40px;
    border: none;

    opacity: 0.5;
    @media ${props => props.theme.mobile} {
        display: none;
    }

`;

export const ButtonContainer = styled.div`

    margin: auto 0px;

    display: flex;
    justify-self: right;

    @media ${props => props.theme.mobile} {
        display: none;
    }
    

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
