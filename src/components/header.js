import React, { Component } from 'react';


export class Header extends Component {
    constructor(props) {
        super(props)
        // this.onMakeOlder = this.onMakeOlder.bind(this)
        this.state = {
            age: props.initalAge
        }
    }
    onMakeOlder = () => {
        this.setState({
            age: this.state.age += 1
        })
        // this.state.age += 1  // 这个值改变也不渲染页面, react规定 state的值改变才渲染页面
    }
    handleProps = () => {
        this.props.toFather(this.state.age)  // 子组件接收父组件传递过来的方法, 再利用函数执行的参数传回去
    }
    
    componentDidMount() {
        this.handleProps()
    }
   

    render() {
        return (
            <div className="header">
                <button onClick={this.handleProps}>Son To Fahter</button>
                <br/>
             
                列表
                <ul>
                    {this.props.hobbies.map( (item, i) => <li key={i}>{ item }</li> )}
                </ul>

                age: {this.state.age}
                <div>
                    
                    <button onClick={this.onMakeOlder}>click me</button>
                </div>

                <div>
                    {this.props.children}
                </div>
                <br/>
                兄弟组件传值
                <hr />
                <div>
                    <h1>
                        {this.props.homeLink}
                    </h1>
                    <span>我是header组件</span>
                </div>
        
            </div>
        )
    }
}