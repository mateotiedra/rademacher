import { useState } from 'react';

const NavbarLogic = (props) => {
  const navLinksObj = [
    { text: 'Mon actualité', to: '/actualite' },
    { text: 'Contact', to: '/contact' },
  ];
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpened(open);
  };

  return { navLinksObj, drawerOpened, toggleDrawer };
};

export default NavbarLogic;
