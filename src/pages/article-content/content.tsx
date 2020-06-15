import React from 'react';
import MarkNav from 'markdown-navbar';
import ReactMarkdown from 'react-markdown';
import { Row, Col, Affix, Divider} from 'antd';
import contentStore from './store'

export default class ArticleContent extends React.Component<any, any> {
  public store = contentStore;

  render() {
    const store = this.store;
    return (
      <div className='detailed'>
        <Row justify="center">
          <Col xs={24} sm={24} md={18} lg={13} className='article-content-left'>
            <div className="detailed-title">
              <h2>{store.markdown.title}</h2>
              <p>author: {store.markdown.user}</p>
            </div>
            <div className='detailed-content'>
              <ReactMarkdown
                source = {store.markdown.content}
                escapeHtml = {false}
              />
            </div>
          </Col>

          <Col xs={0} sm={0} md={0} lg={5} className='article-content-right'>
            <Affix offsetTop={5}>
                  <div className='detailed-nav comm-box'>
                  <Divider>文章目录</Divider>
                  <MarkNav
                    className='article-menu'
                    source = {store.markdown.content}
                    headingTopOffset={10}
                  />
                </div>
              </Affix>
          </Col>
        </Row>
      </div>
    )
  }
}
