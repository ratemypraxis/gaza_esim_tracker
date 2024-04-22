import React from 'react';

import Cover from './Cover';
import Footer from './Footer';
import HeaderNavBar from './HeaderNavBar';
import Timeline from './Timeline';

const HomePage = () => (
  <div>
    <HeaderNavBar />
    <Cover />
    <Timeline />
    <Footer />
  </div>
);

export default HomePage;
