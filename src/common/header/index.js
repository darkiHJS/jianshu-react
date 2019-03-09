import React from 'react'
import { connect } from 'react-redux'
import {
  HeaderNavber,
  WidthLimit,
  Container,
  Logo,
  Nav,
  Addition
} from './style'

const Header = (props) => {
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
                  <input
                    className={props.focused?"search-input focused":"search-input"}
                    placeholder="搜索"
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                  />
                  <button className={props.focused?"search-btn focused":"search-btn"}><i className="iconfont tab-ic">&#xe6e4;</i></button>
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

const mapStateToProps = (state) => {
  return {
   focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
