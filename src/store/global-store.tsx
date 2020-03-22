import { observable, action, computed, runInAction} from 'mobx';

export class GlobalStore {
  @observable navList = [
    {
      url: '/',
      code: 'Home',
      name: '主页'
    },

    {
      url: '/language',
      code: 'language',
      name: '文章分类'
    },

    {
      url: '/articles',
      code: 'articles',
      name: '所有文章'
    },

    {
      url: '/user',
      code: 'user',
      name: '关于我'
    }
  ];
}



export default new GlobalStore()
