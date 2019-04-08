import React from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件, 不渲染生命周期函数, 性能提升很多
const todoUi = (props) => {
  return (
    <div>
        <div>
          <Input 
            onChange={props.handleInputChange} 
            value={props.inputValue} 
            placeholder="Todo Info" 
            style={{width: 300, marginRight: 10}} 
          />
          <Button type="primary" onClick={props.handleInputClick}>Commit</Button>
        </div>
        <List
          style={{ marginTop: '20px', color: '#2a2' }}
          bordered
          dataSource={props.list}
          renderItem={ (item, index) => (
            <List.Item onClick={() => {props.deleteItem(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
  )
}

// class todoUi extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <Input 
//             onChange={this.props.handleInputChange} 
//             value={this.props.inputValue} 
//             placeholder="Todo Info" 
//             style={{width: 300, marginRight: 10}} 
//           />
//           <Button type="primary" onClick={this.props.handleInputClick}>Commit</Button>
//         </div>
//         <List
//           style={{ marginTop: '20px', color: '#2a2' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={ (item, index) => (
//             <List.Item onClick={() => {
//               this.props.deleteItem(index)
//             }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default todoUi