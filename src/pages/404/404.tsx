import * as React from "react";
import { Row, Col, Button } from 'antd';
import { page404Svg } from './page-404-svg';
import Icon from '@ant-design/icons';

export default class User extends React.Component<any, any>{

  render() {
    return (
      <div className="page-404">
          <Row justify="center"  align="middle">
          <Col xs={24} sm={24} md={14} lg={11} >
            <Icon className="svg" component={page404Svg} />
          </Col>

          <Col xs={24} sm={24} md={14} lg={11}>
                <h1>404</h1>
                <h2>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist.
                How you got here is a mystery. But you can click the button below
                to go back to the homepage.
                </p>
                <Button href="/" type="primary" style={{width: '150px'}}>HOME</Button>
              </Col>
        </Row>
      </div>
    )
  }
}

