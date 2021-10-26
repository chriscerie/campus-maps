import SideArrow from './SideArrow';
import Sidenav from './SideNav';
import { useState } from 'react';
import './index.scss';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <Sidenav onClick={onClick} />
  ) : (
    <SideArrow onClick={onClick} />
  );
}

export default Sidebar;
