import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem() {
    const { handleDelete, i } = this.props; // 解构赋值
    handleDelete(i);
  }
  render() {
    const { content } = this.props;
    return <div onClick={this.handleDeleteItem}>{content}</div>;
  }
}

export default TodoItem;
