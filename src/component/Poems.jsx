import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Peom from './Peom';
import axios from 'axios'


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Poems = ({ poem }) => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const getPoems = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/poem/allpoems");
        setPoems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPoems();
  }, [poem]);
  return (
    <>
      <Container>
        {poems.map((item) => <Peom item={item} key={item.id} />)}
      </Container>
    </>
  )
}

export default Poems
