import React from 'react';
import { Link } from 'react-router-dom';
import SideNavBar from '../common/sidebar';
import { AskButton,
    AskButtonContainer,
    Container, 
    QuestionsContainer, 
    SideNavBarContianer, 
    Title, 
    Wrapper 
} from './styles';

const Questions: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <SideNavBarContianer>
                    <SideNavBar>
                        
                    </SideNavBar>
                </SideNavBarContianer>
                <QuestionsContainer>
                    <Title>
                        Questions
                    </Title>
                    <AskButtonContainer>
                        <AskButton>
                            <Link to="/ask">
                                Ask Question!
                            </Link>
                        </AskButton>
                    </AskButtonContainer>
                </QuestionsContainer>
            </Wrapper>
        </Container>
    );
};

export default Questions;