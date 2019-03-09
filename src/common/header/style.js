import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderNavber = styled.div`
  position: relative;
  height: 55px;
  border-bottom: 1px solid #f0f0f0;
`
export const WidthLimit = styled.div`
  position: relative;
  max-width: 1440px;
  min-width: 768px;
  height: 58px;
  margin-left: auto;
  margin-right: auto;
`

export const Container = styled.div`
  width: 980px;
  margin-left: auto;
  margin-right: auto;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.ul`
  width: 980px;
  height: 55px;
  line-height: 55px;
  margin: 0 auto;
  .tab-ic{
    margin-right: 5px;
    font-size: 24px;
  }
  .tab{
    float: left;
    margin-left: 10px;
    font-size: 17px;
    a{
      padding: 15px;
      color: #333;
      text-decoration: none;
    }
    &.active{
      a{
        color: #ea6f5a;
      }
    }
    &.search{
      position: relative;
      .search-input{
        background: #eee;
        font-size: 14px;
        width: 160px;
        height: 38px;
        padding: 0 50px 0 20px;
        color: #666;
        border: 1px solid #eee;
        border-radius: 40px;
        outline: none;
        transition: all .2s ease-out;
        &::placeholder{
          color: #999;
        }
        &.focused{
          width: 240px;
        }
      }
      .search-btn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: transparent;
        right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        line-height: normal;
        padding: 0;
        color: #969696;
        text-align: center;
        transition: all .2s ease-out;
        .tab-ic{
          padding-left: 3px;
        }
        &.focused{
          background: #aaa;
          color: #fff;
        }
      }
    }
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  .tab-ic{
    margin-right: 5px;
    font-size: 15ypx;
  }
  .addition-item{
    float: right;
    line-height: 58px;
    text-decoration: none;
    color: #969696;
    margin-right: 31px;
    font-size: 15px;
  }
  .addition-btn{
    box-sizing: border-box;
    white-space: nowrap;
    padding: 6px 12px;
    min-width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    text-align: center;
    vertical-align: middle;
    &.addition-btn_artcle{
      color: #fff;
      background: #ea6f5a;
    }
  }
` 