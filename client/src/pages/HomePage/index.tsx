import Sidebar from '../../components/Sidebar'
import React from 'react';
import MapComponent from './MapComponent';

function HomePage() {
  return (
    <React.Fragment>
      <Sidebar />
      <MapComponent />
    </React.Fragment>
  );
}

export default HomePage;
