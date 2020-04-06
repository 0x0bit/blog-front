import * as React from "react";
import TweenOne from 'rc-tween-one';
import { inject, observer } from "mobx-react";
import { Menu} from 'antd';
const { Item, SubMenu } = Menu;
import { Link } from "react-router-dom";

import Icon from '@ant-design/icons';

@inject("globalstore")
@observer
export default class Nav extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  public dataSource = this.props.globalstore.navSource;

  render() {
    const { isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = this.dataSource.Menu.children;

    const navChildren = navData.map((item: any) => {
      const { path, name, icon, subItem } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.key}
            className={item.className}
            title={
              <Link to={path} className='header-item-block header-item'>
                <Icon component={icon} className='svg-style' />{name}
              </Link>
            }
            popupClassName="header-item-child"
          >

            {subItem.map(($item: any, ii: number) => {
              const { children: childItem } = $item;
              const child = (
                <div key={childItem.key} className='item-sub'>
                  <Link to={childItem.path}>
                    <Icon component={childItem.icon} className='svg-style' />
                    {childItem.name}
                  </Link>
                </div>
              );

              return (
                <Item key={$item.key || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }

      return (
        <Item key={item.key} className={item.className}>
          <Link to={path} className='header-item-block'>
            <Icon component={icon} className='svg-style' />{name}
          </Link>
        </Item>
      );
    });

    const moment = phoneOpen === undefined ? 300 : null;
    return (
      // logo动画
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...this.dataSource.theme === 'light' ? { ...this.dataSource.wrapper.light } : { ...this.dataSource.wrapper.dark }}
        {...props}
      >

        <div
          className={`home-page ${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...this.dataSource.logo}
          >
            <img width="100%" src={this.dataSource.logo.imghref} alt="img" />
          </TweenOne>

          {isMobile && (
            <div
              {...this.dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >

              {/* 小屏幕下拉按钮 */}

              {
                [0, 0, 0].map((_, i) => {
                  return (
                    <em key={i} className={this.dataSource.theme === 'light' ? 'em-light' : 'em-dark'} />
                  )
                })
              }

            </div>
          )}

          {/* 菜单栏动画 */}
          <TweenOne
            {...this.dataSource.Menu}
            animation={
              isMobile
                ? {
                  height: 0,
                  duration: 500,
                  onComplete: (e) => {
                    if (this.state.phoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              theme={this.dataSource.theme}
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

