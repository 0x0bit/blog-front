import * as React from 'react';
import { List, Tag, } from 'antd';
import { FieldTimeOutlined, EyeOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
import homestore from './store';

const IconText = ({ icon, text, color = 'skyblue' }: any) => (
  <span style={{padding: '0 10px', fontSize: '10px'}}>
    {React.createElement(icon, { style: { marginRight: '5px', color: color, textSize: 20 } })}
    {text}
  </span>
);

export default class ArticleList extends React.Component<any, any>{
  public store = homestore;
  render() {
    const store = this.store;
    return (
      <div>
        <List
          className="article-list"
          itemLayout="vertical"
          pagination={{
            onChange: store.pageSizeChange,
            pageSize: 10
          }}
          dataSource={(store.tabPaneKey == '1' ? store.articleLists : store.hotarticleLists)}
          loading={store.articleLists.length===0 || store.hotarticleLists.length===0 ? true : false}
          renderItem={item => (
            <List.Item
              key={item.id}
              className="article-list-item"
              extra={
                <img
                  className='article-image'
                  width={245}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
              actions={[
                <IconText icon={UserOutlined} text={item.author} key={1} />,
                <IconText icon={FieldTimeOutlined} text={item.issueDate} key={2} />,
                <IconText icon={EyeOutlined} text={item.pageView} key={3} />,
                <IconText icon={LikeOutlined} color='red' text={item.pageView} key={4} />
              ]}
            >

              <List.Item.Meta
                className="article-title"
                title={
                  <a href={`/article/detailed/${item.id}`}>
                    <Tag color="#2db7f5">{item.tag}</Tag>{item.title}
                  </a>
                }
              />
              <p className='article-desc'>{item.desc}</p>
            </List.Item>
          )}
        >
        </List>
      </div>
    )
  }
}
