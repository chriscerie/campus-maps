import './Sidebar.scss';
import SideArrow from './SideArrow';
import Sidenav from './SideNav';
import { Component, Fragment, useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // state is true: open

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <Fragment>
      {isOpen ? <Sidenav onClick={onClick} /> : <SideArrow onClick={onClick} />}
    </Fragment>
  );
}

export default Sidebar;
