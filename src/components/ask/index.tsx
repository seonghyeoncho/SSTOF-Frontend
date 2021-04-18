import React, { useState } from 'react';
import { AskBodyContainer, 
    AskBodyInput, 
    AskBodyText, 
    AskContainer, 
    AskPreviewContainer, 
    AskRightSiedBarContainer,
    AskTitle, 
    AskTitleInput, 
    AskTitleInputContainer, 
    AskTitleInputText, 
    Container, 
    HowToUseMDLink, 
    Wrapper 
} from './styles';

const AskQuestion: React.FC = () => {
    const [askText, setAskText] = useState<string>("");

    const previewText = () => {
        
    }
    return (
        <Container>
            <Wrapper>
                <AskTitle>
                    Ask Question!
                </AskTitle>
                <>
                    <AskContainer>
                        <h1>dfdf</h1>
                        <h2>dfdf</h2>
                        <h3>sdfsdf</h3>
                        <AskTitleInputContainer>
                            <AskTitleInputText>
                                Title
                            </AskTitleInputText>
                            <AskTitleInput placeholder="제목을 입력하세요."/>
                        </AskTitleInputContainer>

                        <AskBodyContainer>
                            <AskBodyText>
                                Body
                            </AskBodyText>
                            <HowToUseMDLink>
                                마크다운 사용법
                            </HowToUseMDLink>
                            <AskBodyInput value={askText}>
                                
                            </AskBodyInput>
                            
                        </AskBodyContainer>
                        <AskPreviewContainer>
                            {}
                        </AskPreviewContainer>
                        
                        
                    </AskContainer>
                    <AskRightSiedBarContainer>

                    </AskRightSiedBarContainer>
                </>
            </Wrapper>
        </Container>
    );
};

export default AskQuestion;