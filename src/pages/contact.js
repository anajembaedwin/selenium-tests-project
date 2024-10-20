// src/pages/contact.js
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      {submitted ? (
        <><SuccessMessage>Thank you for contacting us!</SuccessMessage>
        <StyledLink href="/">Go Back Home</StyledLink></>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1.5rem;
  color: green;
  margin-top: 20px;
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