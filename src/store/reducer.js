const defaultState = {
  inputValue: '',
  list: ['Item']
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)) // 要操作state, 就得先深拷贝一个 state, 因为不能直接操作reducer里的state 
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'add_item_list') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState  // 返回给 store了, store里的数据发生变化, store.subscribe是组件用来监听store里的数据变化
  }

  if (action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  
  return state
}