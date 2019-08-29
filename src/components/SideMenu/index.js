import React from 'react';
import { Menu, Layout } from 'antd';
// import { Link } from 'gatsby';
import { buildMenu } from 'silverstripe-gatsby-helpers';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


const { Sider } = Layout;


const SideMenu = ({ page }) => {
  const menuItems = buildMenu(2, page);

  if (!menuItems.length) {
    return null;
  }


  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menuItems.map(item => (
          <Menu.Item key={item.id}>
            <Link to={item.link}>{item.SilverStripeSiteTree.menuTitle}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};


SideMenu.defaultProps = {
  page: {},
};

SideMenu.propTypes = {
  page: PropTypes.any,
};

export default SideMenu;
