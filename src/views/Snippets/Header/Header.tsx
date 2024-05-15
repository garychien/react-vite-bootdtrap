import {Flex, Container, media} from 'bear-react-grid';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderRoot>
            {/* Section 1 */}
            <Container>
                <SimpleHeader>
                    <Flex className="align-items-center mb-2 mb-lg-0">
                        <img src="src/assets/bootstrap-black.svg" alt="" width={40}/>
                        <Title>Simple header</Title>
                    </Flex>
                    <Flex>
                        <HeaderButton isActive>Home</HeaderButton>
                        <HeaderButton>Features</HeaderButton>
                        <HeaderButton>Pricing</HeaderButton>
                        <HeaderButton>FAQs</HeaderButton>
                        <HeaderButton>About</HeaderButton>
                    </Flex>
                </SimpleHeader>
            </Container>

            <GraySection/>
        </HeaderRoot>
    );
}

export default Header;


const GraySection = styled.div`
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;

const HeaderButton = styled.button<{
    isActive?: boolean,
}>`
    font-size: 1rem;
    font-weight: 400;
    color: #0d6efd;
    border-radius: 3px;
    padding: .5rem 1rem;
  
    ${props => props.isActive && `
        color: #fff;
        background-color: #0d6efd;
    `}
`;

const Title = styled.div`
    color: #212529;
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 10px;
`;

const SimpleHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #dee2e6;
  
    ${media.lg`
        flex-direction: row;
    `}
`;

const HeaderRoot = styled.div`
`;
