import React, { Component } from 'react';
import './left-nav.less';
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux'
import menulist from '../../config/menuConfig'
import storageUtils from '../../utils/storageUtils';
import { setHeaderTitle } from '../../redux/action'
const { SubMenu } = Menu;
class LeftNav extends Component {
    componentWillMount() {
        this.menuNodes = this.getMenusNodes(menulist)
    }

    render() {
        //获取当前的路由地址
        let seleteKey = this.props.location.pathname
        if (seleteKey.indexOf('/product') === 0) {
            seleteKey = '/product'
        }

        return (
            <div className='left-nav'>
                <Link className="left-nav-link" to="/home">
                    <img src={logo} alt="logo" />
                    <h1>欢网科技</h1>
                </Link>
                <Menu
                    selectedKeys={[seleteKey]}
                    defaultOpenKeys={[this.openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {this.menuNodes}

                </Menu>
            </div>
        );
    }
    //map+递归函数实现
    getMenusNodes = (menulist) => {
        const path = this.props.location.pathname
        return menulist.map(item => {
            //判断用户是否有此item对应权限
            if (this.hasAuth(item)) {
                if (!item.children) {
                    //找到path对应的item 执行setHeaderTitle方法更新title 值是item.title
                    if (item.key === path || path.indexOf(item.key) === 0) {
                        this.props.setHeaderTitle(item.title)
                    }

                    return (
                        <Menu.Item key={item.key}>
                            <Link to={item.key} onClick={() => { this.props.setHeaderTitle(item.title) }}>
                                <Icon type={item.icon} />
                                <span>{item.title} </span>
                            </Link>
                        </Menu.Item>
                    )
                } else {
                    const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
                    if (cItem) {
                        this.openKey = item.key
                    }


                    return (
                        <SubMenu
                            key={item.key}
                            title={
                                <span>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                </span>
                            }>
                            {
                                this.getMenusNodes(item.children)
                            }
                        </SubMenu>
                    )

                }

            }



        })

    }

    hasAuth = (item) => {
        const username = storageUtils.getUser()
        const munes = [
            '/role',
            '/charts/line',
            '/home',
            '/user',
            '/category',
            '/product']

        if (username === 'admin' || item.public || munes.indexOf(item.key) !== -1) {
            return true
        } else if (item.children) {
            const cItem = item.children.find(cItem => munes.indexOf(cItem.key) !== -1)
            return !!cItem
        }
        return false
    }
}
//使用高阶组件包装非路由组件
export default connect(
    state => ({}),
    { setHeaderTitle }
)(withRouter(LeftNav));