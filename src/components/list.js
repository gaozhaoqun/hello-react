import React, { Component } from 'react'
import TodoItem from './todp-item'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            todoValue: ''
        }
    }

    inputChange = (e) => {
        const v = e.target.value
        this.setState(() => ({ todoValue: v }))
    }

    handleItemClick() {
        this.setState({
            arr: [...this.state.arr, this.state.todoValue],
            todoValue: ''
        })
    }

    handleDeleteItem = (index) => {
        const myarr = [...this.state.arr]   // React 规定不要直接操作 state里的数据!!! 会影响性能优化
        myarr.splice(index, 1)
        this.setState({
            arr: [...myarr]
        })
    }

    render() {
        let mgb = {marginBottom: '400px'}
        return (
            <div style={mgb}>
                <div>
                    <ul>
                    <input onChange={this.inputChange} value={this.state.todoValue} type="text"/>
                    <div>
                        <button onClick={this.handleItemClick.bind(this)}>todo Button</button>
                    </div>
                        { this.getReturnItem() }
                    </ul>
                </div>
                
            </div>
        )
    }
    getReturnItem() {  // JSX中尽量不要写带逻辑的, 可以提取出来用法代替
        return this.state.arr.map( (item, index) => {
            return (
                <TodoItem 
                    content={item} 
                    handleDelete={this.handleDeleteItem} 
                    i={index} 
                    key={index}
                >
                </TodoItem>
            )
        })
    }
}

export default List