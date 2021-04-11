import React from 'react';
import {
    Container, 
    Wrapper,

} from './styles';


const SideNavBar: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <div>Home</div>
                <div>PUBLIC</div>
                <div>
                    <div>Questions</div>
                    <div>Tags</div>
                    <div>Users</div>
                </div>
            </Wrapper>
        </Container>
    );
};

export default SideNavBar;
