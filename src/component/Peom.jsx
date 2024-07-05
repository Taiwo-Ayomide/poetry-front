import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  flex: 1;
  margin: 5px;
  /* margin-top: -3rem; */
  min-width: 280px;
  height: auto;
  display: flex;
  background-color: #f5fbfd;
  /* position: relative; */
`;
const Contain = styled.div`
    padding-top: 1rem;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 1rem;
`;
const Head = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #0000ff;
`;
const Poet = styled.p`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
`;
const Poem = styled.h3`
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    line-height: 2rem;
    text-align: justify;
    line-clamp: 5;
`;

const Peom = ({ item }) => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green", cursor: "pointer", position: "absolute" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};
  return (
    <Container>
        <Contain>
            <Head>{item.title}</Head>
            <Poet>{item.poet}</Poet>
            <Poem>
              <ReadMore>{item.poem}</ReadMore>
            </Poem>
        </Contain>
    </Container>
  )
}

export default Peom
