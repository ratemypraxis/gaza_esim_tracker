import React from 'react';

import Cover from './Cover';
import Footer from './Footer';
import HeaderNavBar from './HeaderNavBar';
import Timeline from './Timeline';
import HowEsimWorks from './HowEsimWorks';

const HomePage = () => (
  <div>
    <HeaderNavBar />
    <Cover />
    <Timeline />
    <HowEsimWorks />
    <Footer />
  </div>
);

export default HomePage;
