import React, { Component, Fragment } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style.js';
import { Iconfont } from './statics/iconfont/iconfont';
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Iconfont />
        <Header/>
      </Fragment>
    );
  }
}

export default App;
