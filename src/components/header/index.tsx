import React from 'react';
import {
    Container,
    TitleContainer,
    Wrapper,
    Input,
    InputContainer,
    Title,
    TitleImage,
    ButtonContainer,
    UserLinkButton,
    InstructionLinkButton,
    MyQuestionsLinkButton,
    InputImage
} from './styles';

const Header: React.FC = () => {

    return(
        <Container>
           <TitleContainer>
                    <TitleImage
                    />
                    <Title>
                        SSTOF
                    </Title>
                </TitleContainer>
            <Wrapper>
                <InputContainer>
                    <InputImage/>
                    <Input
                        type="text"
                        placeholder="Search..."
                    />
                </InputContainer>

                <ButtonContainer>
                    <UserLinkButton>

                    </UserLinkButton>
                    <MyQuestionsLinkButton>
                        
                    </MyQuestionsLinkButton>
                    <InstructionLinkButton>

                    </InstructionLinkButton>
                    
                </ButtonContainer>
                
            </Wrapper>
        </Container>
    );

};

export default Header;