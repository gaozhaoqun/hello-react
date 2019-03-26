import React, { Component } from 'react';
import './App.css';
import Wrap from './wrap'

/**
 * 高内囊指的是把逻辑紧密相关的内容放在一个组件中 。
 * 低辑合指的是不同组件之间的依赖关系要尽量弱化，也就是每个组件要尽量独立。
 */


class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    const obj = {to: '父传子'}
    return (
      <div className="App">
        <header className="App-header">
          <Wrap FatherToSun={obj} />
        </header>
      </div>
    );
  }
}

export default App;
