// src/pages/about.js
import Link from 'next/link';
import styled from 'styled-components';

export default function About() {
  return (
    <Container>
      <Title>About Us</Title>
      <Description>We are learning Selenium WebDriver with Python!</Description>
      <StyledLink href="/">Go Back Home</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0070f3;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
`;

const StyledLink = styled(Link)`
  margin-top: 30px;
  font-size: 1.2rem;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
