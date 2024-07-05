import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 3rem;
    margin-top: 5.6rem;
    background-color: #ff0000;
    display: flex;
    align-items: center;
`;

const Text = styled.h1`
    color: #ffff;
    text-transform: uppercase;
    font-size: 1.3rem;
    margin-left: 3rem;
    font-family: Arial, Helvetica, sans-serif;
`;

const Greet = () => {
  return (
    <Container>
        <Text>Enjoy your reading</Text>
    </Container>
  )
}

export default Greet
