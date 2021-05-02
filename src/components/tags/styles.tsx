import styled from "styled-components";

export const Container = styled.div`
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`

  @media ${(props) => props.theme.desktop} {
    width: 100%;
    max-width: 1280px;

    display: flex;
    justify-content: space-between;
  }
`;
export const SideNavBarContianer = styled.div`
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
export const TagsContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;

  padding: 24px;

  background-color: #4e4e4e;
  color: white;
  margin-left: 183px;
  @media ${(props) => props.theme.mobile} {
    background-color: transparent;
  }
`;

export const Title = styled.div`
  font-size: 27px;
  font-weight: bold;

  margin-bottom: 24px;
`;
