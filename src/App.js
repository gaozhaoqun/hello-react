import React, { Component } from 'react';

// import Wrap from './components/wrap'
import Anttodo from './components/antd/AntTodolist'
import './App.css';

/**
 * 高内囊指的是把逻辑紧密相关的内容放在一个组件中 。
 * 低辑合指的是不同组件之间的依赖关系要尽量弱化，也就是每个组件要尽量独立。
 */

 /*
   React 数据视图更新原理
  1. state 数据
  2. jsx模板
  3. 数据 + 模板 生成虚拟DOM ( 虚拟DOM就是一个JS对象, 用它来描述阵势DOM ) (损耗了性能) 
  4. 用虚拟DOM的结构生成真实的DOM, 来显示 < div id="abc"><span>hello</span></div>

  5. state发生变化

  6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
    ['div', {id: 'abc'}, ['span', {}, 'bye']]

  7. 比较原始DOM和心的虚拟DOM的区别, 找到区别是span中的内容 (极大的提升了性能)
    diff比对,
    使用稳定的内容作为key值!!!
    循环的时候 key值 的意义是为了方便两次数据的比对, 如果用index作为key值, 容易造成错乱, 不要用index作为key值(耗费性能)

  8. 直接操作DOM, 改变span中的内容


  优点:  1. 性能提升   2. 它使得跨端应用得以实现, React Native
  */

  /*
    componentWillReceiveProp 生命周期函数: 
      一个组件要从父组件接收props
      如果这个组件第一次存在父组件中, 不会执行
      如果这个组件之前已经存在于父组件中, 才回执行
    
    shouldComponentUpdate 生命周期函数: 
      决定该子组件的render函数 是否重新渲染, 可以提升性能

    componentWilIMount
      发 ajax的
  */

class App extends Component {
  render() {
    // const obj = {to: '父传子'}
    return (
      <div className="App">
        <header className="App-header">
          {/* <Wrap fatherToSun={obj} /> */}
          <Anttodo />
        </header>
      </div>
    );
  }
}

export default App;
