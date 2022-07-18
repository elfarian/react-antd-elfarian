import React, { Component } from 'react'
import Sidebar from '../parts/sidebar'
import Footer from '../parts/footer'
import { Layout, Card, Space } from 'antd';
const { Content } = Layout;

export default class About extends Component {
  render() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0'}}>
                    <Sidebar active='about' />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Card title="Biodata" size="small">
                            <p>Name: Elfarian Dela Virdausa</p>
                            <p>TTL: Pamekasan, 13 April 1999</p>
                        </Card>
                        <Card title="Pendidikan" size="small">
                            <p>Politeknik Elektronika Negeri Surabaya</p>
                            <p>D4 Teknik Telekomunikasi</p>
                        </Card>
                        <Card title="Pengalaman" size="small">
                            <p>Machine Learning Automation - PT Berau Coal</p>
                            <p>Full Stuck Developer - PT Berau Coal</p>
                            <p>Web Developer - Upscale.id</p>
                        </Card>
                    </Space>
                    </Content>
                </Layout>
            </Content>
            <Footer />
        </Layout>
    )
  }
}
