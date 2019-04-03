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
  
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.Number === this.state.Number){
      // console.log('shouldComponentUpdate')
      return true
    }
}
  

  inputChange = e => {
    const v = e.target.value;
    // const v = this.input.value  // 在input输入框上 设置 ref= ( (r) => {this.input = r}),  尽量数据驱动DOM, 不要直接操作
    this.setState(() => ({ todoValue: v }));
  };

  handleItemClick() {
    const { arr, todoValue } = this.state;
    this.setState(
      () => ({
        // setState是异步的!!!!!!!!!!!! 第二个参数是设置完之后执行的!!!
        arr: [...arr, todoValue],
        todoValue: ""
      }),
      () => {
        console.log(
          "setState第二个参数打印" +
            this.ul.querySelectorAll("div").length +
            ", 愿意是setState是异步, 第二个参数能确保setState执行完"
        );
      }
    );

    console.log(
      "先打印的是setState执行完," + this.ul.querySelectorAll("div").length
    ); // setState 是异步的, 这里打印的时候, ul 里还没添加div
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
          <ul
            ref={ul => {
              this.ul = ul;
            }}
          >
            <input
              onChange={this.inputChange}
              value={this.state.todoValue}
              type="text"
              ref={r => {
                this.input = r;
              }} // r指的是ref, this.input指的是标签<input>DOM节点, (this.input可以替代 e.target)
            />
            <button onClick={this.handleItemClick}>todo Button</button>
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
