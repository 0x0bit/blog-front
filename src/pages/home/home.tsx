import * as React from "react";
import { Row, Col, Carousel, Tabs, Card, Tag, Popover } from 'antd';
import {
  FieldTimeOutlined, EyeOutlined, WechatOutlined,
  LikeOutlined, UserOutlined, GithubOutlined, MailOutlined
} from '@ant-design/icons';

import ArticleListStore from './store';
const { TabPane } = Tabs;
const { Meta } = Card;

function callback(key: any) {
  console.log(key);
}

export default class Home extends React.Component<any, any>{
  public store = new ArticleListStore();

  render() {
    const store = this.store;
    return (
      <div className="blog-home">
        <Row justify="center">
          <Col xs={24} sm={24} md={18} lg={18}>
            <Carousel autoplay>
              <div>
                <h3>置心一处时，万里不远，不远万里</h3>
              </div>
              <div>
                <h3>愿岁并谢，与常友兮</h3>
              </div>
              <div>
                <h3>如果樱花常开，如果故人常在，那么两厢邂逅，如何动人情怀。</h3>
              </div>
              <div>
                <h3>
                  • To the world you may be just one person. To the person you may be the world.
                </h3>
              </div>
            </Carousel>
          </Col>
        </Row>

        <div className="home-content">
          <Row justify="center">
            <Col xs={24} sm={24} md={18} lg={13} className='home-content-left'>
              <Tabs defaultActiveKey="1" onChange={store.tabOnClickChange}>
                <TabPane tab="推荐阅读" key="1" >
                  <div className='content-article-list'>
                    {
                      store.articleLists.map((article: any, index: number) => {
                        return (
                          <Card
                            key={index}
                            className="article-card"
                            hoverable="true"
                            title={<span><Tag color="#2db7f5">{article.tag}</Tag>{article.title}</span>}
                            actions={[
                              <span><UserOutlined />&nbsp;{article.author}</span>,
                              <span><FieldTimeOutlined />&nbsp;{article.issueDate}</span>,
                              <span><EyeOutlined style={{ color: 'skyblue', fontWeight: 'bolder' }} />&nbsp;{article.pageView}</span>,
                              <span><LikeOutlined style={{ color: 'red', fontWeight: 'bolder' }} />&nbsp;{article.giveLike} </span>
                            ]}
                          >
                            <Row>
                              <Col span={17}><p className='article-desc'>{article.desc}</p></Col>
                              <Col span={6} offset={1} className="article-img">
                                <img src={article.articleImg} alt={article.title} />
                              </Col>
                            </Row>
                          </Card>
                        )
                      })
                    }
                  </div>
                </TabPane>

                <TabPane tab="所有文章" key="2" >
                  <div className='content-article-list'>
                    {
                      store.hotarticleLists.map((article: any, index: number) => {
                        return (
                          <Card
                            key={index}
                            className="article-card"
                            hoverable="true"
                            title={<span><Tag color="#2db7f5">{article.tag}</Tag>{article.title}</span>}
                            actions={[
                              <span><UserOutlined />&nbsp;{article.author}</span>,
                              <span className="article-time"><FieldTimeOutlined />&nbsp;{article.issueDate}</span>,
                              <span><EyeOutlined style={{ color: 'skyblue', fontWeight: 'bolder' }} />&nbsp;{article.pageView}</span>,
                              <span><LikeOutlined style={{ color: 'red', fontWeight: 'bolder' }} />&nbsp;{article.giveLike} </span>
                            ]}
                          >
                            <Row>
                              <Col xs={24} sm={24} md={17} lg={17} className='article-desc'>{article.desc}</Col>
                              <Col xs={0} sm={0} md={6} lg={6} offset={1} className="article-img">
                                <img src={article.articleImg} alt={article.title} />
                              </Col>
                            </Row>
                          </Card>
                        )
                      })
                    }
                  </div>
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

              <div></div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

