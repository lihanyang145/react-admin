import React, { Component } from 'react';
import './product.less'
import { Card, Table, Button, Icon, Modal, Select, Input } from 'antd';
const { Option } = Select;
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: 'Name',
                dataIndex: 'name',
                render: (text, record) => <a onClick={() => {
                    // this.category = category,
                    this.categoryName = record.name
                    this.setState({
                        showStatus: 2
                    })
                }

                }>{text}</a>,
            },
            {
                title: 'Cash Assets',
                className: 'column-money',
                dataIndex: 'money',
                render: (money) => '￥' + money
            },
            {
                title: '状态',
                dataIndex: 'status',
                render: (status) => {
                    let btnText='下架'
                    let Text='在售'
                    if(status==='2'){
                        btnText='上架'
                        Text='已下架'
                    }
                    return (
                        <span>
                            <Button>{btnText}</Button>
                            <span>{Text}</span>
                        </span>
                    )
                }
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
            ],
            data: [{
                key: '1',
                name: 'John Brown',
                money: '300,000.00',
                address: 'New York No. 1 Lake Park',
                status: '1'
            },
            {
                key: '2',
                name: 'Jim Green',
                money: '1,256,000.00',
                address: 'London No. 1 Lake Park',
                status: '2'
            },
            {
                key: '3',
                name: 'Joe Black',
                money: '120,000.00',
                address: 'Sidney No. 1 Lake Park',
                status: '1'
            },
            ],

        }
    }
    render() {
        const title = (
            <span>
                <Select style={{ width: '200px' }} value="1">
                    <Option value="1">按名称搜索</Option>
                    <Option value="2">按描述搜索</Option>
                </Select>

                <Input style={{ width: '200px', margin: '0 10px' }} placeholder='关键字' />
                <Button>搜索</Button>
            </span>
        )


        const extra = (
            <Button><Icon type='plus' />添加</Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    bordered
                />
            </Card>
        );
    }
}

export default Product;