import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
const { Footer} = Layout;
import { Provider } from 'mobx-react'


// 全局数据文件
import globalStore from './store/global-store';
const stores = { globalStore }

// 模块引入
import Nav from './pages/component/nav';
import Login from './pages/login/login';
import Home from './pages/home';
import Language from './pages/language';
import User from './pages/user';
import Foot from './pages/component/footer';
import LeaveMsg from './pages/leave-message';
import Page404 from './pages/404';
class App extends React.Component {

  render() {
    return (
      <Layout>
        <Router >
        <Nav />
            <Route exact path={'/'} component={Home} />
            <Route path={"/login"} component={Login} />
            <Route path={"/language"} component={Language} />
            <Route path={"/about"} component={User} />
            <Route path={"/msg"} component={LeaveMsg} />
            <Route path={"/404"} component={Page404} />

          </Router>
        <Footer><Foot/></Footer>
      </Layout>
    )
  }
}

ReactDOM.render(
  <ConfigProvider>
    <Provider {...stores} >
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
