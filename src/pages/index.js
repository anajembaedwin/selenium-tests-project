// src/pages/index.js
import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Title>Welcome to My Next.js App</Title>
      <Nav>
        <StyledLink href="/about">About Us</StyledLink>
        <Divider>|</Divider>
        <StyledLink href="/contact">Contact</StyledLink>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  font-size: 1.2rem;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
  color: #999;
`;
