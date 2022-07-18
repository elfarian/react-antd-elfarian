import React, { Component } from 'react'
import Sidebar from '../parts/sidebar'
import Footer from '../parts/footer'
import { Layout, Avatar, List, PageHeader } from 'antd';
const { Content } = Layout;

export default class Contact extends Component {
  render() {
    const data = [
        {
          title: 'Instagram',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
          username: 'oca_asoy',
          link: 'https://www.instagram.com/oca_asoy',
        },
        {
          title: 'Facebook',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png',
          username: 'elfariandelavirdausa',
          link: 'https://www.facebook.com/elfariandelavirdausa',
        },
        {
          title: 'Email',
          image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png',
          username: 'elfarianvirdausa93@gmail.com',
          link: 'mailto:elfarianvirdausa93@gmail.com',
        },
        {
          title: 'Whatsapp',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png',
          username: '+6282333361013',
          link: 'https://wa.me/6282333361013',
        },
      ];
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sidebar active='contact' />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <PageHeader
                        className="site-page-header"
                        title="Contact Me"
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src={`${item.image}`} />}
                            title={<a href={`${item.link}`} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                            description={`${item.username}`}
                            />
                        </List.Item>
                        )}
                    />
                    </Content>
                </Layout>
            </Content>
            <Footer />
        </Layout>
    )
  }
}
