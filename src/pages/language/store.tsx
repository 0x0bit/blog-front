import { observable, toJS, action } from 'mobx';

export default class languageStore {
  @observable languageLists = [
    {
      name: 'JavaScript',
      key: 'JavaScript',
      articleNum: 12,
      pageView: 500
    },
    {
      name: 'Node.js',
      key: 'node',
      articleNum: 12,
      pageView: 500
    },
    {
      name: 'Java',
      key: 'java',
      articleNum: 12,
      pageView: 500
    },
    {
      name: '生活随记',
      key: 'life',
      articleNum: 12,
      pageView: 500
    },
    {
      name: '其他',
      key: 'other',
      articleNum: 12,
      pageView: 500
    }
  ]

  @action.bound findLanguageArtNum(name: string) {
    console.log(name)
  }
}
