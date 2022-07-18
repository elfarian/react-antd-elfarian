import React, { Component } from 'react'
import Sidebar from '../parts/sidebar'
import Table from '../parts/table'
import Footer from '../parts/footer'
import { Layout, PageHeader } from 'antd';
const { Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sidebar active='home' />
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <PageHeader
                className="site-page-header"
                title="List of Places"
                subTitle="with coordinates"
              />
              <Table />
            </Content>
          </Layout>
        </Content>
        <Footer />
      </Layout>
    )
  }
}
