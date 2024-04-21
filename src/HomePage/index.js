import React from 'react';
import styled from 'styled-components';
import HeaderNavBar from './HeaderNavBar';
import Footer from './Footer';

const AppContainer = styled.div`
  background-color: grey;
  margin-top: 40px;
  height: 130vh;
`;

const HomePage = () => (
  <div>
    <HeaderNavBar />
    <AppContainer> hello </AppContainer>
    <Footer />
  </div>
);

export default HomePage;
