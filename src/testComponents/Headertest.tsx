import Burger from "../components/Burger/Burger";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { List } from "../components/List";
import Nav from "../components/Nav/Nav";

export const Header1 = () => (
  <Header variant="light">
    <Nav>
      <Image src={"/logo.svg"} alt="logo" width={60} height={80} />
      <List integration="horizontal" spacing={10}>
        <List.item size="xl">
          <Nav.link href="statue">Statue</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Contact</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Products</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">About</Nav.link>
        </List.item>
      </List>
      <Flex>
        <Button variant="primary" size="xs">
          Sign Up
        </Button>
      </Flex>
      <Burger />
    </Nav>
  </Header>
);

export const Header2 = () => (
  <Header variant="light">
    <Nav>
      <Image src={"/logo.svg"} alt="logo" width={60} height={80} />
      <List integration="horizontal" spacing={10}>
        <List.item size="xl">
          <Nav.link href="statue">Statue</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Contact</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Products</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">About</Nav.link>
        </List.item>
      </List>
      <Nav.link href="Sign-Up" variant="primary" size="xl">
        Log in →
      </Nav.link>
      <Burger />
    </Nav>
  </Header>
);

export const Header3 = () => (
  <Header variant="light">
    <Nav>
      <Image src={"/logo.svg"} alt="logo" width={60} height={80} />
      <List integration="horizontal" spacing={10}>
        <List.item size="xl">
          <Nav.link href="statue">Statue</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Contact</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Products</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">About</Nav.link>
        </List.item>
        <Button variant="primary" size="xs">
          Sign Up
        </Button>
      </List>
      <Burger />
    </Nav>
  </Header>
);

export const Header4 = () => (
  <Header variant="light">
    <Nav>
      <Image src={"/logo.svg"} alt="logo" width={60} height={80} />
      <List integration="horizontal" spacing={10}>
        <List.item size="xl">
          <Nav.link href="statue">Statue</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Contact</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">Products</Nav.link>
        </List.item>
        <List.item size="xl">
          <Nav.link href="statue">About</Nav.link>
        </List.item>
        <Nav.link href="Sign-Up" variant="primary" size="xl">
          Log in →
        </Nav.link>
      </List>
      <Burger />
    </Nav>
  </Header>
);

export default Header1;
