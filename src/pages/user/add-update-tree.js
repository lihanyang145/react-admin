import React, { Component } from 'react';
import { Tree, Button } from 'antd';
import menuList from '../../config/menuConfig';

const { TreeNode } = Tree;
class AddUpdateTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                '/role',
                '/charts/line',
                '/home',
                '/category'
            ],
            checkedKeys:[]
        }
    }
    render() {
        const { menus,checkedKeys} = this.state
        return (
            <div>
                <Tree
                    checkable
                    defaultExpandAll
                    checkedKeys={checkedKeys}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="平台权限" key="all">
                        {
                            this.getTreeNodes
                        }
                    </TreeNode>
                </Tree>
                <Button>确定</Button>
                <Button onClick={this.cancel}>取消</Button>
            </div>

        );
    }
    componentWillMount(){
        this.getTreeNodes=this.getTreeNodes(menuList)
        const menus = this.state.menus
        this.setState({
            checkedKeys: menus
        })
    }
    getTreeNodes = (menuList) => {
        return menuList.reduce((pre, item) => {
            pre.push(
                <TreeNode title={item.title} key={item.key}>
                    {item.children ? this.getTreeNodes(item.children) : null}
                </TreeNode>
            )
            return pre
        }, [])

    }
    onCheck = (checkedKeys) => {
        this.setState({
            checkedKeys: checkedKeys
        })
    }
    cancel=()=>{
        console.log(this.state.checkedKeys);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        
        const menus = nextProps.menus
        this.setState({
            checkedKeys: menus
        })
    }
}

export default AddUpdateTree;