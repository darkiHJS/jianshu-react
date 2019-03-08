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
export const Nav = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
  background-color: green;
`