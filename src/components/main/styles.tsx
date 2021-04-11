import styled from 'styled-components';

export const Container = styled.div`

    @media ${props => props.theme.desktop} {
        display: grid;
        grid-template-columns: 1fr 1080px 1fr;
        gap: 24px;

        margin-top: 74px;
    }

    

`;

export const SideNavBarContianer = styled.div`
    
    width: 154px;
    height: 100px;

    border-radius: 10px;

    background-color: #4E4E4E;

    display: flex;
    justify-self: right;

    @media ${props => props.theme.mobile} {
        display: none;
    }

`;


export const MainContainer = styled.div`

    width: 100%;
    height: 100%;

    border-radius: 10px;

    padding: 24px;

    background-color: #4E4E4E;
    color: white;

    @media ${props => props.theme.mobile} {
        background-color: transparent;
    }

`;
export const MainContentTitle = styled.div`

    font-size: 27px;
    font-weight: bold;

    margin-bottom: 24px;

`;
export const MainfillterButtons = styled.div`

    width: 470px;
    height: 48px;

    float: right;

    background-color: #A2A2A2;

    border-radius: 10px;

    margin-bottom: 24px;

`;
export const MainContent = styled.div`
`;