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
    MyQuestionsLinkButton
} from './styles';

const Header: React.FC = () => {

    return(
        <Container>
            <div/>
            <Wrapper>
                <TitleContainer>
                    <TitleImage
                    />
                    <Title>
                        SSTOF
                    </Title>
                </TitleContainer>

                <InputContainer>
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