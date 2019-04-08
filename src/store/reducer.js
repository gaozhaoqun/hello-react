import { CHANGE_INPUT_VALUE, ADD_ITEM_LIST, DELETE_ITEM, GET_INIT_JSON } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: ['Item']
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 要操作state, 就得先深拷贝一个 state, 因为不能直接操作reducer里的state 
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState  // 返回给 store了, store里的数据发生变化, store.subscribe是组件用来监听store里的数据变化
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === GET_INIT_JSON) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }
  
  return state
}