import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

const HeaderNavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Gaza eSim Tracker
        </Menu.Item>
        <Menu.Item as="a">About Us</Menu.Item>
        <Menu.Item as="a">Donate eSims</Menu.Item>
      </Container>
    </Menu>
  );
};

export default HeaderNavBar;
