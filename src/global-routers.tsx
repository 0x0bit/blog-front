/**
 * 全局路径配置文件
 *
 */
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react'

import Home from './pages/home-page';
import Articles from './pages/article-page';
import User from './pages/user-page';
import { Row, Col, Button, Input } from 'antd';
const { Search } = Input;

@inject("globalStore")
@observer
export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="nav-style">
          <nav>
            <Row>
              <Col span={4} style={{ fontSize: '18px', textAlign: 'center' }}>LOGO</Col>
              <Col span={10}>
                {
                    this.props.globalStore.navList.map((title:any) => {
                      return (
                        <Link to={title.url} className="option" key={title.code}>{title.name}</Link>
                      )
                    })
                  }
              </Col>
              <Col span={4} className="nav-search">
                <Search placeholder="input search text" onSearch={(value: any) => console.log(value)} enterButton />
              </Col>
              <Col span={6} className="nav-button">
                <Button type="primary" style={{marginRight:'20px'}}>登录</Button>
                <Button type="primary">注册</Button>
              </Col>
            </Row>

          </nav>
        </div>

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/articles" component={Articles}></Route>
        <Route exact path="/user" component={User}></Route>
      </Router>
    )

  }
}
