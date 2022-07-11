import React from 'react';
import { Button, Navbar, Menu } from 'react-daisyui';

const PAGES = ['Past Work', 'About', 'Blog'];
const NavbarComp = () => {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <Navbar.Start>
          <Button className="text-xl upper-case" color="ghost">
            Tim Dev.
          </Button>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="p-0">
            {PAGES.map((page, index) => (
              <Menu.Item key={index}>{page}</Menu.Item>
            ))}
          </Menu>
        </Navbar.Center>
        <Navbar.End></Navbar.End>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
