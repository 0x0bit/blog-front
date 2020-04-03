import React from 'react';
import { observable, action, computed, runInAction } from 'mobx';
import Icon from '@ant-design/icons';
import { githubSvg, emailSvg, weiBoSvg } from '../common/common-svg';

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


  @observable personMsg = {
    name: '杨博',
    headimg: '',
    description: [
      '来自甘肃，现居住与杭州',
      '现在在杭州又拍云工作',
      '目前主要从事与 Node.js 后端开发',
      '个人喜欢看书，爬山，运动，篮球等活动',
      '座右铭：多喜乐，常安宁'
    ],

    skills: [
      {
        skillsName: '前端',
        skillsPercentage: 70,
        color: '#49C085'
      },
      {
        skillsName: 'Node.js',
        skillsPercentage: 80,
        color: '#f2b63c'
      },
      {
        skillsName: 'Java',
        skillsPercentage: 60,
        color: '#287fca'
      },
      {
        skillsName: 'MySQL',
        skillsPercentage: 75,
        color: '#e04642'
      },
      {
        skillsName: 'PS',
        skillsPercentage: 45,
        color: '#d687d3'
      },
    ],

    contact: {
      hrefImg: '',
      description: '个人的微信，可以添加',
      other: [
        {
          name: 'github',
          href: 'https://github.com/pureyb/',
          icon: githubSvg,
        },

        {
          name: 'email',
          href: 'yangbo@oidbo.com',
          icon: emailSvg,
        },
        {
          name: '微博',
          href: 'https://weibo.com/u/5700032037',
          icon: weiBoSvg
        }
      ]
    }
  }
}



export default new GlobalStore()
