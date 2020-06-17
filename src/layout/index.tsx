import * as React from 'react'
import {Row, Col} from 'antd'

const ContentPage: any = (Page: any) => (
  <Row className='comm-main' justify='center'>
    <Col xs={24} sm={24} md={18} lg={13}>
      <Page />
    </Col>
  </Row>
);

const ContentWithSide: any = (Page: any, Side: any) => (
  <Row className='comm-main' justify='center'>
    <Col xs={24} sm={24} md={18} lg={13}>
      <Page />
    </Col>
    <Col xs={0} sm={0} md={0} lg={5}>
      <Side />
    </Col>
  </Row>
)

const Layout = (Page: any, Side: any) => {
  return (
    Side ? ContentWithSide(Page, Side) : ContentPage(Page)
  )
}

export default Layout;

