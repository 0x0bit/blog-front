import React, { Component } from 'react';


// index父页面渲染函数
// index父页面渲染函数
export function asyncComponent(getComponent:any) {
  return class AsyncComponent extends Component {
    static Component:any = null
    state = { Component: AsyncComponent.Component }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component: null) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}
