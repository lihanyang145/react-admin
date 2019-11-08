import React, { Component } from 'react';
import './left-nav.less';
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Menu, Icon } from 'antd';
import menulist from '../../config/menuConfig'
const { SubMenu } = Menu;
class LeftNav extends Component {
    componentWillMount() {
       this.menuNodes = this.getMenusNodes(menulist)
    }

    render() {
        //获取当前的路由地址
        const seleteKey = this.props.location.pathname
      
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
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title} </span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(cItem => cItem.key === path)
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


        })

    }
}
//使用高阶组件包装非路由组件
export default withRouter(LeftNav);