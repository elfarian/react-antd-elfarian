import React, { Component } from 'react'
import venues from '../json/maps.json'
import Sidebar from '../parts/sidebar'
import Footer from '../parts/footer'
import { useNavigate } from "react-router-dom";
import { Layout, PageHeader } from 'antd';
const { Content } = Layout;

interface DataType {
    id: number;
    lat: number;
    lon: number;
    category: string; 
    name: string; 
    created_on: number; 
    geolocation_degrees: string;
  }

class NewDetail extends Component<{navigate: any},any>{

    constructor(props: any){
        super(props);
        let data: DataType = {
            id: 0,
            lat: 0,
            lon: 0,
            category: "",
            name: "",
            created_on: 0,
            geolocation_degrees: "",
        };
        this.state = {
            data,
        }
    }
    componentDidMount() {
        var params_id = window.location.pathname.split("/")[1];
        const newData: any = venues.venues.find(venue => venue.id === parseInt(params_id));
        this.setState({
            data: newData
        })
    }
  render() {
    const { navigate } = this.props;
    if (!this.state.data) {
        return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sidebar active="home"/>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <div className="container mx-auto mt-12">
                        <PageHeader
                            className="site-page-header"
                            onBack={() => navigate("/")}
                            title="Detail"
                            subTitle="not found"
                        />
                        Data Not Found
                    </div>
                </Content>
            </Layout>
            </Content>
            <Footer />
        </Layout>
        )
    }
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sidebar active="home"/>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
                        <div className="container mx-auto mt-12">
                        <PageHeader
                            className="site-page-header"
                            onBack={() => navigate(-1)}
                            title="Detail"
                            subTitle={`${this.state.data.id}`}
                        />
                            <table style={{textAlign: "left", fontSize: "15px"}}>
                                <tbody>
                                <tr>
                                    <td> ID </td>
                                    <td>:</td>
                                    <td>{this.state.data.id}</td>
                                </tr>
                                <tr>
                                    <td> Latitude </td>
                                    <td>:</td>
                                    <td>{this.state.data.lat}</td>
                                </tr>
                                <tr>
                                    <td> Longitude </td>
                                    <td>:</td>
                                    <td>{this.state.data.lon}</td>
                                </tr>
                                <tr>
                                    <td> Category </td>
                                    <td>:</td>
                                    <td>{this.state.data.category}</td>
                                </tr>
                                <tr>
                                    <td> Name </td>
                                    <td>:</td>
                                    <td>{this.state.data.name}</td>
                                </tr>
                                <tr>
                                    <td> Geologycal Degrees </td>
                                    <td>:</td>
                                    <td>{this.state.data.geolocation_degrees}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Content>
            </Layout>
            </Content>
            <Footer />
        </Layout>
    )
  }
}

function Detail() {
    const navigate = useNavigate();
  return (
   <NewDetail navigate={navigate} />
  )
}


export default Detail;
