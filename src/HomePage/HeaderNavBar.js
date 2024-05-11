import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { color } from '../theme';
import { Link } from 'react-scroll';

const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.color} !important;
`;

const HeaderNavBar = () => {
  return (
    <StyledMenu fixed="top" inverted color={color.green}>
      <Container>
        <Link to="top" smooth={true} duration={500}>
          <Menu.Item as="a" header>
            Gaza eSim Tracker
          </Menu.Item>
        </Link>
        <Link to="whatHappened" smooth={true} duration={500}>
          <Menu.Item as="a">What happened</Menu.Item>
        </Link>
        <Link to="howEsimWorks" smooth={true} duration={500}>
          <Menu.Item as="a">How eSim Works</Menu.Item>
        </Link>
        <Link to="fundraisingEfforts" smooth={true} duration={500}>
          <Menu.Item as="a">Donate eSims</Menu.Item>
        </Link>
      </Container>
    </StyledMenu>
  );
};

export default HeaderNavBar;
