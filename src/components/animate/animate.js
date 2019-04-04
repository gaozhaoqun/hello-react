import React, { Component } from 'react'
import './style.css'

class Animate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleShowClick = this.handleShowClick.bind(this)
  }

  handleShowClick() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

  render() {
    return (
      <div style={{marginBottom: '250px'}} >
        <p className={this.state.show === true ? 'show' : 'hide'}>Toggle Transition</p>
        <div className="toggleBtn" onClick={this.handleShowClick}>Click toggle</div>
      </div>
    )
  }
}

export default Animate