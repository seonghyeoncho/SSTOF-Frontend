import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
    @media ${props => props.theme.desktop} {

    width: 100%;
    display: flex;
    justify-content: center;

}
`;

export const Wrapper = styled.div`

    
    margin-top: 79px;

    @media ${props => props.theme.desktop} {

        width: 100%;
        max-width: 1280px;

        display: flex;
        flex-direction: column;
    }
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
    @media ${props => props.theme.desktop} {

        margin-top: 48px;
        width: 1090px;
        height: 100%;
        padding: 10px;
    }
`;
export const AskRightSiedBarContainer = styled.div`
    
`;
export const AskTitleInputContainer = styled.div`
`;
export const AskTitleInputText = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
export const AskTitleInput = styled.input`

    width: 100%;
    background-color: #363636;
    border: none;
    border-radius: 5px;
    padding: 5px;
    @media ${props => props.theme.desktop} {
        height: 34px;
    }
`;

export const AskBodyContainer = styled.div`
    color: white;
`;
export const AskBodyText = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
export const HowToUseMDLink = styled.div`
`;
export const AskBodyInput = styled.input`
    width: 100%;
    background-color: #363636;
    border: none;
    border-radius: 5px;
    padding: 5px;
    @media ${props => props.theme.desktop} {
       
    }
`;
export const AskPreviewContainer = styled.div`
    color: white;
    font: initial;
    
`;