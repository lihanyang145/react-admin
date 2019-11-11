import React, { Component } from 'react';
import { Card, Table, Button, Icon, Modal } from 'antd';
import AddUpdateFrom from './add-update-from'
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            showStatus: 0,//0:显示  1：显示添加  2：显示修改
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
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },],
            data: [{
                key: '1',
                name: 'John Brown',
                money: '￥300,000.00',
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                money: '￥1,256,000.00',
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                money: '￥120,000.00',
                address: 'Sidney No. 1 Lake Park',
            },
            ],

        }
    }
    render() {
        const { showStatus } = this.state
        console.log('showStatus=====+==' + showStatus)

        const extra = (
            <Button onClick={() => {
                this.setState({ showStatus: 1 })
                this.categoryName=''
            }}>
                <Icon type='plus' />
                添加
            </Button>
        )
        return (
            <div>
                <Card extra={extra}>
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.data}
                        bordered
                    />
                    <Modal
                        title={showStatus === 1 ? '添加分类' : '修改分类'}
                        visible={showStatus !== 0}
                        onOk={this.handModal}
                        onCancel={this.hideModal}

                    >
                        <AddUpdateFrom setForm={form => this.form = form} categoryName={this.categoryName} />
                    </Modal>
                </Card>
            </div>
        );
    }

    //确定
    handModal = () => {
        const { count, data, showStatus } = this.state

        this.form.validateFields((err, values) => {

            if (!err) {
                let arr = {
                    key: count,
                    name: values.categoryName,
                    money: '￥300,000.00',
                    address: 'New York No. 1 Lake Park',
                }
                this.setState({
                    data: [...data, arr],
                    count: count + 1,
                    showStatus: 0
                })

            }

        });
    }
    //取消
    hideModal = () => {
        this.setState({
            showStatus: 0
        })
        this.form.resetFields()
    }
}

export default Category;