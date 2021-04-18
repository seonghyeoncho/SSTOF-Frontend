import React from 'react';
import { Link } from 'react-router-dom';
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
    InputImage,
    
} from './styles';

const Header: React.FC = () => {

    return(
        <Container>
                <div/>
            <Wrapper>
                <TitleContainer>
                    <Link to="/">
                        <TitleImage/>
                        <Title>
                            SSTOF
                        </Title>
                    </Link>
                </TitleContainer>

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