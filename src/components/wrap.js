import React, { Component } from 'react';
import ClickCounter from './ClickCounter'
import { Header } from './header'
import Home from './home'
import List from './list'

import PropTypes from 'prop-types';

class Wrap extends Component {
    constructor(props) {
        super(props)
        this.changeCount = this.changeCount.bind(this)  // 通过bind方法让this始终是指向当前组件实例 。
        /**
         *  在某些教程中，大家还会看到另一种bind函数的方式，类似下面的语句: 
         *  this.foo = ::this.foo;
         *  等同于下面的语句:
         *  this.foo = this.foo.bind(this);
         * 这里所使用的两个冒号的::操作符叫做 bind 操作符，
         * 虽然有 babel 插件支持这种 写法， 但是bind操作符可能不会成为 ES标准语法的一部分，
         * 所以，虽然这种写 法看起来很简洁，我们在本书中并不使用它 。
         */
        this.state = {
            count: 0,
            hobbies: ['running', 'football'],
            homeLink: 'defaultHomeValue',
            showHome: true
        }
    }

    changeCount() {
        this.setState({count: this.state.count + 1})
    }

    // handleClick = () => {}  // 如果不绑定bind 用es6的写法也可以, 这里的this就是指向当前js
   
    componentWillMount() {
        // console.log('componentWillMount' + '  component­ WillMount可以在服务器端被调用，也可以在浏览器端被调用;')
    }
    componentDidMount() {
        // console.log('componentDidMount: ' + ' componentDidMount 只在浏览器端执行，倒是给了我们开发者一个很好 的位置去做只有浏览器端才做的逻辑，比如通过 AJAX 获取数据来填充组件的内容 。')
    }

    onHomeShow = () => {
        this.setState({
            showHome: !this.state.showHome
        })
    }


    // 子 传 父 所用到的函数
    getValue(n) {
        console.log(n)
    }

    onChangeLinkName = (newName) => {
        this.setState({
            homeLink: newName
        })
    }

    render() {
        let homeCmp = ""
        if (this.state.showHome) {
            homeCmp = (
                <Home
                    changeLink = {this.onChangeLinkName}
                    initName = {this.state.homeLink}
                ></Home>
            )
        }
        return (
            <div>
                <ClickCounter 
                    count = {this.state.count}
                ></ClickCounter>
                <button onClick = {this.changeCount}>changeCount</button>
                <hr/>
                <Header 
                    hobbies = {this.state.hobbies} 
                    initalAge = {1} 
                    toFather = {this.getValue}
                    homeLink = {this.state.homeLink}
                >
                    <p>父组件里闭合标签, 放在子组件里使用  &#123; this.props.children &#125; </p>
                </Header>
                <hr />
                {homeCmp}
                <div>
                    <button onClick={this.onHomeShow}>切换显示Home组件</button>
                </div>
                <hr/>
                <h1>List</h1>
                <List></List>
            </div>
        )
    }
}

export default Wrap

Header.propTypes = {
    hobbies: PropTypes.array  // 确保传入的是array
};

