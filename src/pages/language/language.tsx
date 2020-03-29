import * as React from "react";
import { Row, Col, Card } from "antd";
import languageStore from "./store";
import Icon from '@ant-design/icons';

import {lookSvg, bookSvg ,languageSvg} from '../../common/common-svg';

const LookSvg = (props:any) => <Icon component={lookSvg} {...props} />;
const BookSvg = (props:any) => <Icon component={bookSvg} {...props} />;
const LanguageSvg = (props: any) => <Icon component={languageSvg} {...props} />;

export default class Language extends React.Component<any, any>{
  public store = new languageStore();
  render() {
    const store = this.store;
    return (
      <div className="language-tag">
        <Row justify="center">
          <Col xs={24} sm={24} md={21} lg={21}>
            <Row justify="center" gutter={[25, 32]}>
                {
                  store.languageLists.map((language: any) => {
                    return (
                      <Col xs={24} sm={24} md={12} lg={7} key={language.key}>
                        <Card
                          title={<a onClick={() => store.findLanguageArtNum(language.key)}>{language.name}</a>}
                          bordered={true}
                          hoverable={true}
                          >

                          <Row>
                            <Col span={20} className="lag-num">
                              <Row justify="space-around" align="middle">
                                <Col span={3}><BookSvg /></Col>
                                <Col span={21}>文章：{language.articleNum} 篇</Col>
                                <Col span={3}><LookSvg /></Col>
                                <Col span={21}>观看次数：{language.pageView} 次</Col>
                              </Row>
                            </Col>
                            <Col span={4} className="tag-image">
                              {language.tagImg ? <img src={language.tagImg}/> : <LanguageSvg />}
                            </Col>
                          </Row>
                        </Card>
                    </Col>
                    )
                  })
                }
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
