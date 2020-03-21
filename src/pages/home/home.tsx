import * as React from "react";
import { Row, Col, Carousel, Tabs, Skeleton } from 'antd';
const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

export default class Home extends React.Component<any, any>{

  render() {
      return (
        <div className="blog-home">
          <Row justify="center">
            <Col xs={24} sm={22} md={20} lg={20}>
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
        </div>
      );
  }
}

