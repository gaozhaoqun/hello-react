import React, { Component } from "react"; // Component作为所有组件的基类
/**
 * import是 ES6 (EcmaScript 6 )语法中导人文件模块的方式，
 * ES6 语法是一个大集合， 大部分功能都被最新浏览器支持。
 * 不过这个 import方法却不在广泛支持之列，这没有关 系， ES6语法的 JavaScript代码会被 webpack和 babel转译成所有浏览器都支持的 ES5语 法，
 * 而这一切都无需开发人员做配置， create-react-app 已经替我们完成了这些 工作 。
 */

class ClickCounter extends Component {
  // 使用的是 ES6 语法来创建一个叫 ClickCounter 的组件类， ClickCounter 的父类就是 Component:
  /**
   * 在 React 出现之初，使用的是 React.createClass 方式来创 造组件类，这种方法已经被 废弃了，
   * 但是在互联网上依然存在大量的文章基于 React.createClass来讲解 React，
   * 这些 文章中依然有很多真知灼见的部分，但是读者要意识到，
   * 使用 React.createClass是一种 过时的方法 。
   * 在本书中，我们只使用 ES6 的语法来构建组件类 。
   */
  // constructor(props) {
  //     super()
  // }
  constructor(props) {
    super(props);
    this.state = {
      testValue: "default"
    };
    this.testChange = this.testChange.bind(this);
  }

  testChange(e) {
    this.setState({
      testValue: e.target.value
    });
  }

  render() {
    const countStyle = {
      margin: "16px",
      color: "#272"
    };
    return (
      <div>
        <div style={countStyle}>Click Count: {this.props.count}</div>
        <div>
          <input
            type="text"
            onChange={this.testChange}
            value={this.state.testValue}
          />
          &emsp;
          <div style={countStyle}>双向数据绑定: {this.state.testValue}</div>
        </div>
      </div>
    );
  }
}

export default ClickCounter;

/**
 * JSX
 * React判断一个元素是 HTML元素还是 React组件的原则就是看第一个字母是否大 写，
 * 如果在 JSX 中我们不用 ClickCounter 而是用 clickCounter，那就得不到我们想要的结果。
 */

//  var inherit = (function () {
//      var F = function () {}
//      return function (Target, Origin) {
//         F.prototype = Origin.prototype
//         Target.prototype = new F()
//         Target.prototype.constructor = Target
//         Target.prototype.uber = Origin.prototype
//      }
//  })()
