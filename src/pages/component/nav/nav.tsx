import * as React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { Row, Col, Input, Button } from 'antd';
const { Search } = Input;

import Icon, { MenuUnfoldOutlined, CloseOutlined } from '@ant-design/icons';
import { blogSvg, homeSvg, computerSvg, aboutSvg, messageSvg, loginSvg } from '../../../common/common-svg';
const BlogSvg = (props: any) => <Icon component={blogSvg} {...props} />;
const HomeSvg = (props: any) => <Icon component={homeSvg} {...props} />;
const ComputerSvg = (props: any) => <Icon component={computerSvg} {...props} />;
const AboutSvg = (props: any) => <Icon component={aboutSvg} {...props} />;
const MessageSvg = (props: any) => <Icon component={messageSvg} {...props} />;
const LoginSvg = (props: any) => <Icon component={loginSvg} {...props} />;

export default class Nav extends React.Component<any, any>{
  constructor(props: any) {
    super(props);

    this.state = {
      activeBtn: true,
    }
  };

  handleClick() {
    $('.blog-head-left').toggleClass('active');

    $(document).on("click", ".blog-head-left>a", () => {
      $('.blog-head-left').removeClass('active');
      this.setState({ activeBtn: true})
    })

    this.setState({
      activeBtn: this.state.activeBtn ? false : true
    })
  }

  render() {
    return (
      <React.Fragment>
        <Row className="blog">
          <Col span={3} className='hidden-xs'></Col>
          <Col xs={24} sm={24} md={18} lg={18}>
            <Row className='blog-head'>
              <Col span={2}>
                <a href='/' className='blog-head-logo'><BlogSvg className='svg-style' /></a>
              </Col>
              <Col xs={24} sm={24} md={14} lg={12} className='blog-head-left'>
                <Link to={"/"}><HomeSvg className="svg-style" /><span>主页</span></Link>
                <Link to={"/language"}><ComputerSvg className='svg-style' /><span>技术分类</span></Link>
                <Link to={"/about"}><AboutSvg className='svg-style' /><span>关于博主</span></Link>
                <Link to={"/msg"}><MessageSvg className='svg-style' /><span>给我留言</span></Link>
              </Col>

              <Col xs={0} sm={0} md={8} lg={10} className="hidden-xs">
                <div className="blog-head-right">
                  <Search
                    className="blog-head-search hidden-md"
                    placeholder="请输入内容"
                    onSearch={value => console.log(value)} enterButton />
                  <Button type="dashed" href="/login"><LoginSvg className='svg-style'/>登录</Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={3} className="hidden-xs"></Col>
          <div onClick={this.handleClick.bind(this)}>
            {
              this.state.activeBtn ? <MenuUnfoldOutlined className='menu-toggle-btn' /> : <CloseOutlined className='menu-toggle-btn' />
            }
          </div>
        </Row>

      </React.Fragment>
    )
  }
}
