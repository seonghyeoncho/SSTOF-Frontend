import React from 'react';
import SideNavBar from '../sidebar';
import { Container, SideNavBarContianer, Title, UsersContainer, Wrapper } from './styles';

const Users:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <SideNavBarContianer>
                    <SideNavBar>

                    </SideNavBar>
                </SideNavBarContianer>
                <UsersContainer>
                    <Title>
                        Users
                    </Title>
                </UsersContainer>
            </Wrapper>
        </Container>
    );
};

export default Users;