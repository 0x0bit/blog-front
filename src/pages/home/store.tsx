import { observable, toJS, action } from 'mobx';

class homestore {
  @observable banner = [
    {
      title: '置心一处时',
      text: '万里不远，不远万里',
      imghref: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3039413855,4006945818&fm=15&gp=0.jpg'
    },
    {
      title: '愿岁并谢',
      text: '与常友兮',
      imghref: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586423268811&di=89fcdd56e1921f68682b4dda2febc308&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F22bf2aac10aa9cdd9537fb58cd778a4b9942448628b0-islZjQ_fw658'},
    {
      title: '如果樱花常开',
      text: '如果故人常在，那么两厢邂逅，如何动人情怀。',
      imghref: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586423327675&di=ef80699b2d6784accb0ed3fc8bea3106&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbb777b9a152ea126a0d6d49fc1d7e84612e5c0845049-iFbPTl_fw658'
    },
    {
      title: 'To the world',
      text: 'you may be just one person. To the person you may be the world.',
      imghref: 'http://hbimg.b0.upaiyun.com/9ecfc67cf4af1cda8b02aef3730eb837cbaa128b1e2a-BsW5kY_fw658'
    },
  ]
  // 全部文章列表
  @observable articleLists = [
    {
      id: 1,
      title: 'egg,为企业框架而生，企业级开发追求规范和共建的同时，还要平衡团队之间的差异',
      author: '杨博',
      desc: `我们深知企业级应用在追求规范和共建的同时，还需要考虑如何平衡不同团队之间的差异，求同存异。
            所以我们没有选择社区常见框架的大集市模式（集成如数据库、模板引擎、前端框架等功能），而是专
            注于提供 Web 开发的核心功能和一套灵活可扩展的插件机制。`,
      issueDate: '2020-03-23',
      pageView: 1000,
      giveLike: 500,
      articleImg: '../../assets/test.jpg',
      tag: 'Node.js'
    },
    {
      id: 2,
      title: 'egg,为企业框架而生，企业级开发追求规范和共建的同时，还要平衡团队之间的差异',
      author: '杨博',
      desc: `我们深知企业级应用在追求规范和共建的同时，还需要考虑如何平衡不同团队之间的差异，求同存异。
              所以我们没有选择社区常见框架的大集市模式（集成如数据库、模板引擎、前端框架等功能），而是专
              注于提供 Web 开发的核心功能和一套灵活可扩展的插件机制。`,
      issueDate: '2020-03-23',
      pageView: 1000,
      giveLike: 500,
      articleImg: '../../assets/test.jpg',
      tag: 'Node.js'
    },
    {
      id: 3,
      title: 'egg,为企业框架而生，企业级开发追求规范和共建的同时，还要平衡团队之间的差异',
      author: '杨博',
      desc: `我们深知企业级应用在追求规范和共建的同时`,
      issueDate: '2020-03-23',
      pageView: 1000,
      giveLike: 500,
      articleImg: '../../assets/test.jpg',
      tag: 'Node.js'
    }
  ];

  // 热门文章列表
  @observable hotarticleLists = [
    {
      id: 1,
        title: 'js引擎的执行过程',
        author: '杨博',
        desc: `js是一种非常灵活的语言，理解js引擎的执行过程对我们学习javascript非常重要，
              但是网上讲解js引擎的文章也大多是浅尝辄止或者只局部分析，例如只分析事件循环
              （Event Loop）或者变量提升等等，并没有全面深入的分析其中过程。所以我一直想
              把js执行的详细过程整理成一个较为详细的知识体系，帮助我们理解和整体认识js`,
        issueDate: '2020-03-23',
        pageView: 1000,
        giveLike: 500,
        articleImg: '../../assets/test.jpg',
        tag: 'JavaScript'
      }
  ]

  @observable tabPaneKey:string = '1';
  @action.bound tabOnClickChange(key: string) {
    this.tabPaneKey = key;
  }

  @action.bound pageSizeChange(page: number) {
    console.log(page);
  }
}

export default new homestore();
