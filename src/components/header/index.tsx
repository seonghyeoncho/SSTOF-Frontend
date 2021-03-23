import React from 'react';
import {
    Container,
    TitleContainer,
    Wrapper,
    Input,
    InputContainer,
    Title,
    InputImage,
    TitleImage
} from './styles';

const Header: React.FC = () => {

    return(
        <Container>
            <Wrapper>
                <TitleContainer>
                    <TitleImage
                    />
                    <Title>
                        SSUTackOverflow
                    </Title>
                </TitleContainer>
                <InputContainer>
                    <InputImage
                    />
                    <Input
                        type="text"
                        placeholder="Search..."
                    />
                </InputContainer>
                
            </Wrapper>
        </Container>
    );

};

export default Header;