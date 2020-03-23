import * as React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import {
  HomeOutlined, FireOutlined, SmileOutlined, UserSwitchOutlined,CloseOutlined,
  SoundOutlined, SolutionOutlined, LoginOutlined, UnorderedListOutlined
} from '@ant-design/icons';

export default class Nav extends React.Component<any, any>{
  constructor(props:any) {
    super(props)
    this.state = {
      styl: true,
    }
  }

  handleClick() {
    $('.navigation-menu').toggleClass('active');
    $(document).on("click", ".navigation-menu>a",  () => {
      $('.navigation-menu').removeClass('active');
      this.setState({
        styl: true,
      })
      return;
    })
    
    this.setState({
      styl: this.state.styl ? false : true
    })
  }

  render() {
    return (
      <header>
        <div className="inner-width">
          <a href="#" className="logo"><img src="../../../assets/logo.png" alt="" /></a>
          <div className="menu-toggle-btn" onClick={this.handleClick.bind(this)}>
            {
              this.state.styl ? <UnorderedListOutlined /> : <CloseOutlined />
            }
          </div>

          <nav className="navigation-menu">
            <Link to={'/'}><HomeOutlined style={{color: "#ff6b6b"}}/>主页</Link>
            <Link to={'/language'}><FireOutlined style={{color: '#0abde3' }}/>技术分类</Link>
            <Link to={'/about'}><SmileOutlined style={{color: '#feca57' }}/>关于博主</Link>
            <Link to={'/exchange'}><UserSwitchOutlined style={{ color: '#5f27cd' }}/>技术交流</Link>
            <Link to={'/msg'}> <SoundOutlined style={{color: '#ff6b6b' }}/>给我留言</Link>
            <Link to={'/submit'}><SolutionOutlined style={{color: '#1dd1a1' }}/>投稿</Link>
            <Link to={'/login'}><LoginOutlined style={{ color: '#52c41a'}}/>登录</Link>
          </nav>
        </div>
      </header>
    )
  }
}


