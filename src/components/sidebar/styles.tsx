import styled from 'styled-components';

export const Container = styled.div`

    @media ${props => props.theme.mobile} {
        display: none;
    }
`;
export const Wrapper = styled.div`
    color:white;

`;