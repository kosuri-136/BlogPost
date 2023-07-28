import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="mb-5 font-weight-normal">
      <Navbar color="primary" light expand="md">
        <NavbarBrand
          className="text-white mx-2 font-weight-bold"
          href="/authors"
        >
         J.K Rowling
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/mostlikedposts">
                Most Liked Post
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/mostcommentedpost">
                Most Liked Comments
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
