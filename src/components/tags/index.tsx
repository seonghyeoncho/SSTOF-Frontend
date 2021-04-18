import React from 'react';
import SideNavBar from '../common/sidebar';
import { Container, SideNavBarContianer, TagsContainer, Title, Wrapper } from './styles';
 
const Tags: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <SideNavBarContianer>
                    <SideNavBar>

                    </SideNavBar>
                </SideNavBarContianer>
                <TagsContainer>
                    <Title>
                        Tags
                    </Title>
                </TagsContainer>
            </Wrapper>
        </Container>
    );
};

export default Tags;