import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content === this.props.content) {
      return false
    }
    return true
  }

  handleDeleteItem() {
    const { handleDelete, i } = this.props; // 解构赋值
    handleDelete(i);
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleDeleteItem}>{content}</div>;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 组件要被移除')
  }
}

export default TodoItem;
