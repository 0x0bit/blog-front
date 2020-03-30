import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import Icon, { SmileOutlined, KeyOutlined } from '@ant-design/icons';
import { inject, observer } from "mobx-react";
import { loginHiddenSvg } from '../../common/common-svg';

import './login.less';
const FormItem = Form.Item;

const LoginHiddenBtn = (props: any) => <Icon component={loginHiddenSvg} {...props} />;
@inject("globalStore")
@observer
export default class Login extends Component<any, any> {

  handleSubmit = async (values: any) => {
    console.log('Received values of form: ', values);
    // const success = await this.props.globalStore.login(values.username, values.password);
  }



  render() {
    return (
      <div className="login-box">
        <div className="hidden-login-btn"><a href="/"><LoginHiddenBtn /></a></div>
        <div className="login-form">
          <h2>后台登录</h2>
          <Form onFinish={this.handleSubmit}>
            <FormItem
              name="username"
              rules={[{
                required: true,
                message: '请输入账号',
              }]}
            >
              <Input prefix={<SmileOutlined style={{ color: 'rgba(0,0,0,0.6)', fontSize: '24px'}}/>} placeholder="账号" />
            </FormItem>
            <FormItem
              name="password"
              rules={[{
                required: true,
                message: '请输入密码',
              }]}
            >
              <Input prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.6)', fontSize: '24px' }} />} type="password" placeholder="密码" />
            </FormItem>
            <FormItem>
              <Button type="primary" className="btn" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
};
