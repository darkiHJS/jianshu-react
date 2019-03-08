import React, { Component } from 'react'
import {
  HeaderNavber,
  WidthLimit,
  Container,
  Logo,
  Nav
} from './style'
class Header extends Component {
  render() {
    return (
      <HeaderNavber>
        <WidthLimit>
          <Logo />
          <Container>
            <Nav></Nav>
          </Container>
        </WidthLimit>
      </HeaderNavber>
    )
  }
}

export default Header