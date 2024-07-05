import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #333;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #ffff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #f5f4f4;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #f5f5f5;
  font-family: 'Times New Roman', Times, serif;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #f5f5f5;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOVEPOEM</Logo>
        <Desc>
          LovePoem is a platform for both Peot and Poetry lovers
          across the globe. The aim is to bring poetry to your
          reach and get to meet new poet.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <Link to="/cart">
            <ListItem>Cart</ListItem>
          </Link>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          Brown House, Adenike Area,
          Ogbomoso, Oyo State.
        </ContactItem>
        <ContactItem>
          +2343 593 1396
        </ContactItem>
        <ContactItem>
          taiwoayomide202@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};
export default Footer;
