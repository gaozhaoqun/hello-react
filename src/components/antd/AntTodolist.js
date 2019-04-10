import React, { Component } from 'react'
import TodoUi from './todoUi'
import 'antd/dist/antd.css'; 
import store from '../../store'
import { getInputChangeAction, getAddItemList, getDeleItem, getInitJsonSaga } from '../../store/actionCreators'


class Anttodo extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    // 订阅store, store里的数据发生改变就可以被自动的执行
    store.subscribe(this.handleStoreChange)  // 只要store数据发生变化, handleStoreChange函数就会执行, 也就是从新设置数据渲染页面
  }

  handleStoreChange = () => {  // 如果 store 里的数据发生改变, 就重新设置数据
    this.setState(store.getState())  // 获取 store中的数据
  }

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) // 向 store 传递 action 来修改数据
  }

  handleInputClick = () => {
    const action = getAddItemList()
    store.dispatch(action)
  }

  deleteItem = (index) => {
    const action = getDeleItem(index)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoUi 
        handleInputChange={this.handleInputChange} 
        inputValue={this.state.inputValue}
        handleInputClick={this.handleInputClick}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    )
  }

  /*
  // 使用 redux-thunk
  componentDidMount() {
    // this.getInitJson()
    const action = getTodoList()
    store.dispatch(action)  // 把这个action 发给store, 这个action会自动执行, 就是 actionCreators里 getTodoList 返回的函数!
  }
  */


  // 使用 saga 中间件
  componentDidMount() {
    const action = getInitJsonSaga()
    store.dispatch(action)
  }
}

export default Anttodo