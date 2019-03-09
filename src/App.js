import React, { Component, Fragment } from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

import { GlobalStyle } from './style.js';
import { Iconfont } from './statics/iconfont/iconfont';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Iconfont />
          <Header/>
        </Fragment>
      </Provider> 
    );
  }
}

export default App;
