import * as React from "react";
import { Row, Col, Card } from "antd";
import languageStore from "./store";
import Icon from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';

import { lookSvg, bookSvg, languageSvg } from '../../common/common-svg';

export default class Language extends React.Component<any, any>{
  public store = new languageStore();
  render() {
    const store = this.store;
    return (
      <div className="language-tag">
        <Row justify="center">
          <Col xs={24} sm={24} md={18} lg={18}>
            <QueueAnim delay={300} ease="easeInOutQuart">
              {
                store.languageLists.map((language: any, i) => {
                  return (
                    <Card
                      title={<a onClick={() => store.findLanguageArtNum(language.key)}>{language.name}</a>}
                      bordered={true}
                      hoverable={true}
                      key={i}
                      style={{margin: '10px 0'}}
                    >
                      <Row justify="center">
                        <Col span={14} className="lag-num">
                          <Row justify="space-around" align="middle">
                            <Col span={3}><Icon component={bookSvg} /></Col>
                            <Col span={21}>文章：{language.articleNum} 篇</Col>
                            <Col span={3}><Icon component={lookSvg} /></Col>
                            <Col span={21}>观看次数：{language.pageView} 次</Col>
                          </Row>
                        </Col>
                        <Col span={4} className="tag-image">
                          {language.tagImg ? <img src={language.tagImg} /> : <Icon component={languageSvg} />}
                        </Col>
                      </Row>
                    </Card>
                  )
                })
              }
            </QueueAnim>

          </Col>
        </Row>
      </div>
    )
  }
}
