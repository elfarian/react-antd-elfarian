import React, { Component } from 'react'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;

type ActiveProps = {
    active: "home" | "about" | "contact";
};
  
export default class sidebar extends Component<ActiveProps>{
  render() {
    const { active } = this.props;
    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
              mode="vertical"
              defaultSelectedKeys={[active]}
              style={{ height: '100%' }}
            >
                
                <Menu.Item eventKey="home" icon={<PieChartOutlined />}>
                    <Link to="/">
                    Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item eventKey="about" icon={<DesktopOutlined />}>
                    <Link to="/about">
                        About
                    </Link>
                </Menu.Item>
                <Menu.Item eventKey="contact" icon={<FileOutlined />}>
                    <Link to="/contact">
                        Contact
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
  }
}
