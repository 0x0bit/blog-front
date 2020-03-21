import * as React from "react";
import { Divider, Row, Col, Carousel, Tabs, Skeleton, Input, Button, Card } from 'antd';
const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

export default class Home extends React.Component<any, any>{

  render() {
    return (
      <div className="blog-home">
        <div className="container">
          <Row>
            <Col span={24}>
              <Carousel autoplay>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </Col>
          </Row>

          <div className="blog-home-content">
            <Row>
              <Col span={18} style={{paddingRight: '20px'}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="推荐阅读" key="1">
                    推荐阅读的文章
                    <Skeleton active/>
                  </TabPane>
                  <TabPane tab="全部文章" key="2">
                    全部的文章
                    <Skeleton active/>
                  </TabPane>
                </Tabs>,
              </Col>
              <Col span={6} className="blog-home-advertising">广告相关</Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

