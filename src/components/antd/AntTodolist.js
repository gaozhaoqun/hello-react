import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import { Input, Button, List } from 'antd';
import store from '../../store'


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
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
   store.dispatch(action) // 向 store 传递 action 来修改数据
  }

  handleInputClick = () => {
    const action = {
      type: 'add_item_list'
    }
    store.dispatch(action)
  }

  deleteItem = (index) => {
    const action = {
      type: 'delete_item',
      value: index
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <div>
          <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder="Todo Info" style={{width: 300, marginRight: 10}} />
          <Button type="primary" onClick={this.handleInputClick}>Commit</Button>
        </div>
        <List
          style={{ marginTop: '20px', color: '#2a2' }}
          bordered
          dataSource={this.state.list}
          renderItem={ (item, index) => (
            <List.Item onClick={this.deleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Anttodo