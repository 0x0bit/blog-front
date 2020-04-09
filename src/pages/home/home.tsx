import * as React from "react";
import { Row, Col, Tabs, Card, Popover } from 'antd';
import { WechatOutlined,GithubOutlined, MailOutlined} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import homestore from './store';
import Banner from './banner';
import ArticleList from './article-list'

const { TabPane } = Tabs;
const { Meta } = Card;

export default class Home extends React.Component<any, any>{
  public store = homestore;

  render() {
    const store = this.store;
    return (
      <div className="blog-home">
        <QueueAnim type={['right', 'left']} delay={500}>
          <Row justify="center" key="banner">
            <Col xs={24} sm={24} md={18} lg={18} >
              <Banner />
            </Col>
          </Row>

          <div className="home-content" key="content">
            <Row justify="center">
              <Col xs={24} sm={24} md={18} lg={13} className='home-content-left'>
                <Tabs defaultActiveKey="1" onChange={store.tabOnClickChange} style={{margin:0}}>
                  <TabPane tab="推荐阅读" key="1" >
                    <ArticleList />
                  </TabPane>
                  <TabPane tab="所有文章" key="2" >
                    <ArticleList />
                  </TabPane>
                </Tabs>
              </Col>

              <Col xs={0} sm={0} md={0} lg={5} className='home-content-right'>
                <div className="left-head">
                  <Card
                    cover={<img alt="this is me" src="../../assets/head.jpg" />}
                    actions={[
                      <a href="https://github.com/pureyb"><GithubOutlined /></a>,
                      <Popover
                        placement="top"
                        content={<img src='../../assets/wei.JPG' style={{ height: '200px' }} />}
                        trigger="hover">
                        <WechatOutlined />
                      </Popover>,

                      <Popover
                        placement="left"
                        content={'shinesyb@gmail.com'}
                        trigger="hover">
                        <MailOutlined />
                      </Popover>
                    ]}
                  >
                    <Meta
                      style={{ textAlign: 'center' }}
                      title="关于我"
                      description="多喜乐，常安宁"
                    />
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </QueueAnim>
      </div>
    );
  }
}

