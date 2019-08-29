import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'gatsby';
import { buildMenu } from 'silverstripe-gatsby-helpers';


const { Header: LayoutHeader } = Layout;

const Header = () => {
  const menuItems = buildMenu(1);

  return (
    <LayoutHeader>
      <Menu mode="horizontal" style={{ lineHeight: '64px' }} theme="dark">
        {menuItems.map(item => (
          <Menu.Item key={item.id}>
            <Link to={item.link}>{item.SilverStripeSiteTree.menuTitle}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </LayoutHeader>
  );
};


Header.defaultProps = {
};

Header.propTypes = {
};

export default Header;
