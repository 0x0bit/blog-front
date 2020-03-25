import { observable, toJS, action } from 'mobx';

export default class ArticleListStore {
  // 全部文章列表
  @observable articleLists = [
    {
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
    }
  ];

  // 热门文章列表
  @observable hotarticleLists = [
      {
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

  @action.bound tabOnClickChange(key: any) {
    console.log(key);
  }
}
