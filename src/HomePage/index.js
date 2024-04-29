import React from 'react';

import Cover from './Cover';
import Footer from './Footer';
import HeaderNavBar from './HeaderNavBar';
import Timeline from './Timeline';
import HowEsimWorks from './HowEsimWorks';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FundraisingEfforts from './FundraisingEfforts';

const HomePage = () => (
  <div>
    <HeaderNavBar />
    <Cover />
    <Timeline />
    <HowEsimWorks />
    <FundraisingEfforts />
    <Footer />
  </div>
);

export default HomePage;
