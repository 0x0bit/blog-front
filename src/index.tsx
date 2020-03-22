import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import App from './global-routers'
import { ConfigProvider } from 'antd'
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

class App extends React.Component {

  render() {
    return (
      <Router >
        <Nav />
        <Switch>
          <Route path={'/home'} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/language"} component={Language} />
          <Route path={"/user"} component={User} />
          <Redirect from={"/"} to={"/home"} />
        </Switch>
      </Router>
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
