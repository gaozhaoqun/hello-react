import React, { Component } from "react";
import axios from "axios";
import TodoItem from "./todp-item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      todoValue: ""
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.getDoubanApi = this.getDoubanApi.bind(this);
    this.getBzhanApi = this.getBzhanApi.bind(this);
  }

  componentDidMount() {
    this.getDoubanApi();
    this.getBzhanApi();
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

  getDoubanApi() {
    axios
      .get("/v2/movie/in_theaters")
      .then(res => {
        // console.log(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBzhanApi() {
    axios.get("/index/recommend.json").then(res => {
      let list = res.data.list;
      // console.log(list) // 类数组: [{…}, {…}, {…}, {…}, {…}, {…}]
      // console.log(Object.keys(list))//  ["0", "1", "2", "3", "4", "5"]
      // console.log(Object.prototype.toString.call( Object.keys(list)) ) // [object Array]
      // Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
      const myArr = [...this.state.arr]  // 尽量打散再传给myArr, 避免res里的数据发生改变造成错乱
      Object.keys(list).map( item => myArr.push(list[item].title))
      this.setState(() => ( { arr: myArr}) )
    });
  }
}

export default List;
