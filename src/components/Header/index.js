import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'gatsby';

const { Header: LayoutHeader } = Layout;

const Header = () => (
  <LayoutHeader>
    <Menu mode="horizontal" style={{ lineHeight: '64px' }} theme="dark">
      <Menu.Item key="">
        <Link to="1">1</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="2">2</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="3">3</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="4">4</Link>
      </Menu.Item>
    </Menu>
  </LayoutHeader>
);


Header.propTypes = {
};

export default Header;
