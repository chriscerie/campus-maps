import Map from './Map';
import Sidebar from '../../components/Sidebar'
import React from 'react';

function HomePage() {
  return (
    <React.Fragment>
      <Sidebar />
      <Map />
    </React.Fragment>
  );
}

export default HomePage;
