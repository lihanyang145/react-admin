import React, { Component } from 'react';
import storageUtil from '../../utils/storageUtils'
import { Redirect ,Switch ,Route } from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/left-nav';
import Header from '../../components/header/header';
import Home from '../home/home';
import Product from '../product/product';
import Role from '../role/role';
import User from '../user/user';
import Line from '../charts/line/line';
import Bar from '../charts/bar/bar';
import Pie from '../charts/pie/pie';
const {  Footer, Sider, Content } = Layout;
class Admin extends Component {
    render() {
        const username = storageUtil.getUser();
        console.log(username)
        if (!username) {
            return <Redirect to="/login" />
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{backgroundColor:'#454554'}}>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/product" component={Product}/>
                            <Route path="/role" component={Role}/>
                            <Route path="/user" component={User}/>
                            <Route path="/charts/line" component={Line}/>
                            <Route path="/charts/bar" component={Bar}/>
                            <Route path="/charts/pie" component={Pie}/>
                            <Redirect to="/home"/>
                        </Switch>
                        
                    </Content>
                    <Footer style={{textAlign:'center'}}>
                        推荐使用谷歌浏览器,可以获得更佳页面操作体验
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;