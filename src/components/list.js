import React, { Component } from "react";
import TodoItem from "./todp-item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      todoValue: ""
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  inputChange = e => {
    const v = e.target.value;
    this.setState(() => ({ todoValue: v }));
  };

  handleItemClick() {
    const { arr, todoValue } = this.state;
    this.setState(() => ({
      arr: [...arr, todoValue],
      todoValue: ""
    }));
  }

  handleDeleteItem = index => {
    const myarr = [...this.state.arr]; // React 规定不要直接操作 state里的数据!!! 会影响性能优化
    myarr.splice(index, 1);
    this.setState(() => ({
      arr: [...myarr]
    }));
  };

  render() {
    let mgb = { marginBottom: "400px" };
    return (
      <div style={mgb}>
        <div>
          <ul>
            <input
              onChange={this.inputChange}
              value={this.state.todoValue}
              type="text"
            />
            <div>
              <button onClick={this.handleItemClick}>todo Button</button>
            </div>
            {this.getReturnItem()}
          </ul>
        </div>
      </div>
    );
  }
  getReturnItem() {
    // JSX中尽量不要写带逻辑的, 可以提取出来用法代替
    const { arr } = this.state;
    return arr.map((item, index) => {
      return (
        <TodoItem
          content={item}
          handleDelete={this.handleDeleteItem}
          i={index}
          key={index}
        />
      );
    });
  }
}

export default List;
