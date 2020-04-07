import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
import homestore from './store';
export default class Banner extends React.Component {
  public bannerstore = homestore.banner;
  render() {
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        {
          this.bannerstore.map((item, i) => {
            return (
              <Element prefixCls="banner-user-elem" key={i}>
                <BgElement key={`bg${i}`} className="bg"
                  style={{
                    backgroundImage: `url(${item.imghref})`,
                    backgroundSize: 'cover',
                    backgroundRepeat:'no-repeat'
                  }}
                />
                  <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    {item.title}
                  </TweenOne>
                  <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                    {item.text}
                  </TweenOne>
              </Element>
            )
          })
        }

      </BannerAnim>);
  }
}
