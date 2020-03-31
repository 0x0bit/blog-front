import * as React from "react";
import {Row, Col, Card} from 'antd';


export default class User extends React.Component<any, any>{
  render() {
    return (
      <div className="about-user">
        <Row justify="center">
          <Col span={18} className="about-content">
            <Card title="关于博主" bordered={true}>
              <div className="about-me">
                <div className="about-me-title"><h2>个人介绍</h2></div>
                <div className="about-me-content">

                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

