import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SideNavBar from '../common/sidebar';
import { AskButton,
    AskButtonContainer,
    Container, 
    QuestionsContainer, 
    SideNavBarContianer, 
    Title, 
    Wrapper 
} from './styles';



const Questions: React.FC<RouteComponentProps> = ({history}: RouteComponentProps) => {

    const pushToAsk = () => {
        history.push("/ask");
    }
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
                        <AskButton onClick={pushToAsk}>
                            Ask Question!
                        </AskButton>
                    </AskButtonContainer>
                </QuestionsContainer>
            </Wrapper>
        </Container>
    );
}
export default Questions;