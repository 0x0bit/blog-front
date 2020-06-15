import { observable, action, computed, runInAction } from 'mobx';
import {
  homeSvg, computerSvg, aboutSvg, messageSvg,
  githubSvg, emailSvg, weiBoSvg} from '../common/common-svg';

import Home from '../pages/home';
import Login from '../pages/login/login';
import Language from '../pages/language';
import User from '../pages/user';
import LeaveMsg from '../pages/leave-message';
export class GlobalStore {
  @observable navSource = {
    theme: 'light', // 主题颜色 light or dark
    wrapper: {
      light: {
        className: 'header header-light home-page-wrapper'
      },
      dark: {
        className: 'header header-dark home-page-wrapper'
      }
    },

    logo: {
      className: 'header-logo',
      imghref: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    // 菜单栏
    Menu: {
      className: 'header-menu',
      children: [
        {
          key: 'item0',
          path: '/',
          name: '首页',
          icon: homeSvg,
          component: Home,
          exact: true
        },
        {
          key: 'item1',
          path: '/lag',
          name: "技术分类",
          icon: computerSvg,
          component: Language,
          exact: false
        },
        {
          key: 'item2',
          path: '/about',
          name: "关于博主",
          icon: aboutSvg,
          component: User,
          exact: false
        },
        {
          key: 'item3',
          path: '/msg',
          name: "给我留言",
          icon: messageSvg,
          component: LeaveMsg,
          exact: false
        },

        // 想要下拉导航，配置时用如下格式
        /**
        {
          key: 'item',
          path: '/msg',
          name: "父级菜单",
          icon: messageSvg,
          component: LeaveMsg,
          exact: false,
          children: [
            {
              key: 'item3',
              path: 'son1',
              name: " 子级菜单",
              icon: messageSvg,
              component: LeaveMsg,
              exact: false
        },
          ]
        },
         */
      ],
    },
    mobileMenu: { className: 'header-mobile-menu' },
  };


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
