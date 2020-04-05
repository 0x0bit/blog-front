import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
const { Footer } = Layout;
import { Provider } from 'mobx-react'


// 全局数据文件
import globalStore from './store/global-store';
const stores = { globalStore }

// 模块引入
import Nav from './component/nav';
import Login from './pages/login/login';
import Home from './pages/home';
import Language from './pages/language';
import User from './pages/user';
import Foot from './component/footer';
import LeaveMsg from './pages/leave-message';
import Page404 from './pages/404';
class App extends React.Component {

  render() {
    return (
      <Layout>
        <Router >
          <Nav />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/language"} component={Language} />
            <Route exact path={"/about"} component={User} />
            <Route exact path={"/msg"} component={LeaveMsg} />
            <Route component={Page404} />
          </Switch>
        </Router>
        <Footer><Foot /></Footer>
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
