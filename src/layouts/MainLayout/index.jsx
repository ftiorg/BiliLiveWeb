import React, {Component} from 'react';
import {Layout, Menu, Icon, Button} from 'antd';
import {withRouter, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.scss';

const {
    Header, Content, Footer, Sider,
} = Layout;


class MainLayout extends Component {

    static freshData = () => function () {
        console.log('666');
    };

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['/']}
                        selectedKeys={[this.props.location.pathname]}
                    >
                        <Menu.Item key="/">
                            <Link to={{pathname: '/'}}/>
                            <Icon type="area-chart"/>
                            <span className="nav-text">概览</span>
                        </Menu.Item>
                        <Menu.Item key="/day">
                            <Link to={{pathname: '/day'}}/>
                            <Icon type="bars"/>
                            <span className="nav-text">今日打卡</span>
                        </Menu.Item>
                        <Menu.Item key="/user">
                            <Link to={{pathname: '/user'}}/>
                            <Icon type="profile"/>
                            <span className="nav-text">打卡排行</span>
                        </Menu.Item>
                        <Menu.Item key="/live">
                            <Link to={{pathname: '/live'}}/>
                            <Icon type="profile"/>
                            <span className="nav-text">直播间</span>
                        </Menu.Item>
                        <Menu.Item key="/test">
                            <Link to={{pathname: '/test'}}/>
                            <Icon type="video-camera"/>
                            <span className="nav-text">Test</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <h1>BILILIVE</h1>
                    </Header>
                    <div className="headLine">
                        <div className="currentRoute">path:{this.props.location.pathname}</div>
                        <div className="freshData">
                            <Button className="freshButton" type="primary"
                                    onClick={MainLayout.freshData()}>更新数据</Button>
                        </div>
                    </div>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        COPYRIGHT 2019 ISDUT.CN. ALL RIGHTS RESERVED.
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default (withRouter(MainLayout));
