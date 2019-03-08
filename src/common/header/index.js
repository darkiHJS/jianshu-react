import React, { Component } from 'react'
import {
  HeaderNavber,
  WidthLimit,
  Container,
  Logo,
  Nav,
  Addition
} from './style'
class Header extends Component {
  render() {
    return (
      <HeaderNavber>
        <WidthLimit>
          <Logo />
          <Container>
            <Nav>
              <li className="tab active">
                <a href="/">
                  <span><i className="iconfont tab-ic">&#xe697;</i>首页</span>
                </a>
              </li>
              <li className="tab">
                <a href="/">
                  <span><i className="iconfont tab-ic">&#xe72f;</i>下载App</span>
                </a>
              </li>
              <li className="tab search">
                <input className="search-input" placeholder="搜索"/>
                <button className="search-btn"><i className="iconfont tab-ic">&#xe6e4;</i></button>
              </li>
            </Nav>
          </Container>
          <Addition>
            <a className="addition-item addition-btn addition-btn_artcle" href="/">
              <i className="iconfont tab-ic">&#xe6af;</i>
              写文章
            </a>
            <a className="addition-item addition-btn" href="/">注册</a>
            <a className="addition-item" href="/">登录</a>
            <a className="addition-item" href="/">Aa</a>
          </Addition>
        </WidthLimit>
      </HeaderNavber>
    )
  }
}

export default Header