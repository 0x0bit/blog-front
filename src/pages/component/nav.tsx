import * as React from "react";
import { Menu } from 'element-react';
import 'element-theme-default'
import { Link } from "react-router-dom";


export default class Nav extends React.Component<any, any>{
  render() {
    return (
      <div>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Menu.Item index="1"><Link to ='/'>主页</Link></Menu.Item>
          <Menu.Item index="2"><Link to='/language'>语言</Link></Menu.Item>
          <Menu.Item index="3"><Link to='/user'>关于我</Link></Menu.Item>
          <Menu.Item index="4"><Link to ='/login'> 登录</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}


