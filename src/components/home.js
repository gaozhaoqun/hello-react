import React, { Component } from 'react'; 

class Home extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            homeLink: props.initName
        }
    }

    OnChangeLink = () => {
        this.props.changeLink(this.state.homeLink)
    }
    /* 
        兄弟组件传值: home定义一个state.homeLink, 然后点击 button 触发 OnChangeLink 执行,
        用父级定义好并传过来的 changeLink方法, 参数就是要传给兄弟组件的值
        父组件 wrap.js  接收到值
        onChangeLinkName = (newName) => {
        this.setState({
            homeLink: newName // 用home.js传过去的newName, 修改 state.homeLink
        })
        然后再用 homeLink 传递给兄弟组件 header.js 来完成兄弟组件之间的传值
    }
    */
    onHandleChange = (event) => {  // 获取input输入的值, 设置到state里 ,  然后点击按钮执行 OnChangeLink 方法把它传到父组件再传到header.js
        // console.log(event.target.value)  // event.target.value 就是input的值
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        let mgb = { arginBottom: '40px' }
        let mgr = {marginRight: '40px'}
        return (
            <div>
                <div style={mgb}>
                    <input 
                        value={this.state.initName} 
                        defaultValue={this.props.initName}
                        style={mgr} 
                        type="text" 
                        onChange={(event) => this.onHandleChange(event)}
                    />
                    <button onClick={this.OnChangeLink}>change header link</button>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default Home