import React from "react";
import { Container, QuestionsContainer, Title, Wrapper } from "./styles";

const Questions: React.FC = () => (
        <Container>
            <Wrapper>
                <QuestionsContainer>
                    <Title>
                        Questions
                    </Title>
                </QuestionsContainer>
            </Wrapper>
        </Container>
    );

export default Questions;