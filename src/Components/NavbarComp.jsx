import React, { useState } from 'react';
import { Button, Navbar, Menu, Drawer } from 'react-daisyui';

const PAGES = ['Past Work', 'About', 'Blog'];
const NavbarComp = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  return (
    <Drawer open={visible} onClickOverlay={toggleVisible} className="font-sans">
      <Navbar>
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <div className="flex-1 px-2 mx-2">Tim Dev.</div>
        <div className="flex-none hidden lg:block">
          <Menu horizontal={true}>
            {PAGES.map((page) => (
              <Menu.Item key={page}>
                <a href="#">{page}</a>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Navbar>
    </Drawer>
  );
};

export default NavbarComp;
