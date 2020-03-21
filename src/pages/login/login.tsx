import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import {SmileOutlined, KeyOutlined} from '@ant-design/icons';
import {inject, observer} from "mobx-react";
import './login.css';
const FormItem = Form.Item;

@inject("globalStore")
@observer
export default class Login extends Component<any, any> {
  handleSubmit = async (values:any) => {
    console.log('Received values of form: ', values);
    // const success = await this.props.globalStore.login(values.username, values.password);
  }

  render() {
    return (
      <div className="page-login">
        <div className="container">
          <div className="login-main">
            <div style={{textAlign: "center", fontSize: '16px', marginBottom: '20px'}}>管理后台登录</div>
            <Form onFinish={this.handleSubmit}>
              <FormItem
                name="username"
                label="账号"
                rules={[{
                    required: true,
                    message: '请输入账号',
                  }]}
              >
                  <Input prefix={<SmileOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
              </FormItem>
              <FormItem
                name="password"
                label="密码"
                rules={[{
                    required: true,
                    message: '请输入账号',
                  }]}
                >
                  <Input prefix={<KeyOutlined  style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              </FormItem>
              <FormItem>
                <Button type="primary" className="btn" htmlType="submit">登录</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
};
