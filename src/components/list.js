import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            todoValue: ''
        }
    }

    inputChange = (e) => {
        this.setState({
            todoValue: e.target.value
        })
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
        return (
            <div>
                <div>
                    <ul>
                        {
                            this.state.arr.map( (item, index) => {
                                return (
                                    <li 
                                        onClick={this.handleDeleteItem.bind(this, index)} 
                                        key={index}
                                        >
                                        {item}
                                    </li>  // 把index传进去 再用splice方法删除
                                )
                            })
                        }
                    </ul>
                </div>
                <input onChange={this.inputChange} value={this.state.todoValue} type="text"/>
                <div><button onClick={this.handleItemClick.bind(this)}>todo Button</button></div>
            </div>
        )
    }
}

export default List