import * as React from "react";
import { Row, Col, Card, Progress, Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import { inject, observer } from "mobx-react";
const { Meta } = Card;


@inject("globalstore")
@observer
export default class User extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
  }
  public personMsgStore = this.props.globalstore.personMsg;

  render() {
    return (
      <div className="about-user">
        <Row justify="center">
          <Col xs={23} sm={23} md={18} lg={18} className="about-content">
            <Card title="关于博主" bordered={true}>
              <div className="about-me">

                <div className="about-me-myself">
                  <div className="about-me-title"><h3>个人介绍</h3></div>
                  <div className="about-me-msg">
                    <Card
                      style={{ width: '100%' }}
                      cover={<img alt="example" src="../../assets/h2.jpg" />}
                    >
                      <Meta title={this.personMsgStore.name} description={
                        this.personMsgStore.description.map((v: React.ReactNode, i: number) => {
                          return (
                            <p key={i}>{v}</p>
                          )
                        })
                      } />
                    </Card>
                  </div>
                </div>

                <div className="about-me-myself">
                  <div className="about-me-title"><h3>个人技能</h3></div>
                  <div className="about-me-skills">
                    <Card
                      style={{ width: '100%' }}
                    >
                      <Meta description={
                        <Row justify="center">
                          <Col xs={23} sm={23} md={12} lg={10} >
                            {
                              this.personMsgStore.skills.map((v:any, i: number) => {
                                return (
                                  <strong key={i}>
                                    {v.skillsName}
                                    <Progress
                                      percent={v.skillsPercentage}
                                      format={percent => `${percent}%`}
                                      strokeWidth={15}
                                      strokeColor={v.color}
                                    />
                                  </strong>
                                )
                              })
                            }
                          </Col>
                        </Row>
                      } />
                    </Card>
                  </div>
                </div>

                <div className="about-me-myself">
                  <div className="about-me-title"><h3>与我联系</h3></div>
                  <div className="about-me-contact">
                    <Card
                      style={{ width: '100%' }}
                      cover={<img alt="example" src="../../assets/wei.JPG" />}
                    >
                      <p>{this.personMsgStore.contact.description}</p>

                      <h3 className="about-me-title">更多联系方式</h3>
                      <Meta description={
                        <Row justify="center" style={{ padding: '20px 0' }}>
                          {
                            this.personMsgStore.contact.other.map((v:any, i:number) => {
                              return (
                                <Col span={3} key={i}>
                                  <Tooltip placement="top" title={v.name}>
                                    <a href={v.href}><Icon component={v.icon}/></a>
                                  </Tooltip>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      } />
                    </Card>

                  </div>
                </div>

              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

