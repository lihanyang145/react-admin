import React, { Component } from 'react';
import './login.less'
import logo from '../../assets/images/logo.png'
import { Form, Icon, Input, Button ,message } from 'antd';
import storageUtil from '../../utils/storageUtils'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const username = storageUtil.getUser()
        console.log(username)
        if(username){
             return <Redirect to='/'/>
        }
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>欢网.后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules: [
                                        { required: true, whitespace: true, message: '用户名不能为空' },
                                        { min: 4, message: '用户名不能小于4位' },
                                        { max: 12, message: '用户名不能大于12位' },
                                        { pattern: /^[a-zA-Z0-9]+$/, message: '用户名必须是字母和数字组成' },
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [
                                        { validator: this.validatorPwd }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }



                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );

    }
    validatorPwd = (rule, value, callback) => {
        value = value.trim()
        if (!value) {
            callback('密码不能为空')
        } else if (value.length < 4) {
            callback('密码不能小于4位')
        } else if (value.length > 12) {
            callback('密码不能大于12位')
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            callback('密码必须是字母和数字组成')
        } else {
            callback()
        }

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // console.log(values);
            if (!err) {
                storageUtil.saveUser(values.username)
                this.props.history.replace("/")
                message.success('登录成功')
            }
        });
    };
}

const wrapperFrom = Form.create()(Login)
export default wrapperFrom;