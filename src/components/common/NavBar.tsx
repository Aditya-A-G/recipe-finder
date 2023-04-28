import React from "react";
import { Menu } from "semantic-ui-react";
import {logo} from "../../constants/constant"

const NavBar = () => {
  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <img src={logo} alt="logo"  style={{width: "150px"}}/>
      </Menu.Item>
      <Menu.Item name="home" />
      <Menu.Item name="recipes" />
    </Menu>
  );
};

export default NavBar;
