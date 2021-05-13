import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div`
    
    a{
        color: white;
        margin-bottom: 12px;
        :hover{
            color: ${theme.themeColor};
        }
    }
    padding: 10px;

    @media ${props => props.theme.mobile} {
        display: none;
    }
`;
export const Wrapper = styled.div`
    color:white;
`;
export const HomeLinkTitle = styled.div`
    margin-bottom: 12px;
`;
export const PublicLinkContainer = styled.div`

`;
export const PublicLinkTitle = styled.div`
    margin-bottom: 12px;

`;
export const PublicLinks = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 12px;
`;