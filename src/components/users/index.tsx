import React from "react";
import { Container, Title, UsersContainer, Wrapper } from "./styles";

const Users:React.FC = () => (
        <Container>
            <Wrapper>
                <UsersContainer>
                    <Title>
                        Users
                    </Title>
                </UsersContainer>
            </Wrapper>
        </Container>
    );

export default Users;