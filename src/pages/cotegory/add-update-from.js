import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'
class AddUpdateFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static propTypes = {
        setForm: PropTypes.func.isRequired
    }
    componentWillMount() {
        this.props.setForm(this.props.form)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Form.Item>
                    {getFieldDecorator('cotegoryName', {
                        initialValue: '',
                        rules: [{ required: true, message: '分类名称不能为空' }],
                    })(
                        <Input type='text' placeholder="请输入分类名称" />
                    )}
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(AddUpdateFrom);