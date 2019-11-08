import React, { Component } from 'react';
import { Modalgit } from 'antd';
import { withRouter } from 'react-router-dom'
import storageUtil from '../../utils/storageUtils'
import menulist from '../../config/menuConfig'
import './header.less'
import moment from "moment";
 
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
         }
    }
    componentDidMount() {
        //启动日期时间定时器
        this.interval=setInterval(() => {
            this.setState({
                currentTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        const name = storageUtil.getUser()
        const title = this.getTitle()
        return (
            <div className="header">
                <div className='header-top'>
                    <label style={{ marginRight: '8px' }}>欢迎,{name}</label>
                    <a href="#" onClick={this.signOut}>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className="header-bottom-left">
                        {title}
                    </div>
                    <div className="header-bottom-right">
                        <label>{this.state.currentTime}</label>
                    </div>
                </div>
            </div>
        );
    }
    signOut = () => {
        Modal.confirm({
            title: '退出',
            content: '确定要退出吗？',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                console.log('OK');
                storageUtil.removeUser()
                this.props.history.replace("/login")
            },
            onCancel: () => {
                console.log('Cancel');
            },
        });

    }
    getTitle = () => {
        let title = ''
        const path = this.props.location.pathname
        menulist.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    console.log(item.title);
                    title = cItem.title
                }
            }
        })
      
        return title
    }
}

export default withRouter(Header);