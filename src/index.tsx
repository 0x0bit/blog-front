import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './common/common.less'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { enquireScreen } from 'enquire-js';
const { Footer } = Layout;
import { Provider } from 'mobx-react'



// 全局数据文件
import globalstore from './store/global-store';
const stores = { globalstore }

// 模块引入
import Nav from './component/nav';
import Foot from './component/footer';
import Page404 from './pages/404';

let isMobile: boolean;
enquireScreen((b: any) => {
  isMobile = b;
});

const { location } = window;

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b: boolean) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    return (
      <Layout>
        <Router >
          <Nav isMobile={this.state.isMobile}/>
          <Switch>
            {
              globalstore.navSource.Menu.children.map((item:any, i) => {
                return (
                  <Route exact={item.exact} path={item.path} component={item.component} key={i} />
                )
              })
            }
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
