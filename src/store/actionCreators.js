import { CHANGE_INPUT_VALUE, ADD_ITEM_LIST, DELETE_ITEM, GET_INIT_JSON, GET_INIT_LIST_SAGA } from '../store/actionTypes'
// import axios from 'axios' // 配置好redux-thunk 就可以在这里请求异步数据

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemList = () => ({
  type: ADD_ITEM_LIST
})

export const getDeleItem = index => ({
  type: DELETE_ITEM,
  index
})

export const getInitJson = data => ({
  type: GET_INIT_JSON,
  value: data  // 返回 axios请求的data 赋值给 value, 在reducer中 以 action.value使用
})

export const getInitJsonSaga = () => ({
  type: GET_INIT_LIST_SAGA
})

/* 
// 使用了redux-thunk actionCreators返回的就可以是一个函数了, 正常只能返回一个对象
export const getTodoList = () => {  // 组件AntTodolist Didmount 里使用getTodoList发起一个action
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5ca8bbd9a0050b65627b5722/reactmock/reactmock').then(res => {
      const data = res.data
      const action = getInitJson(data)
      dispatch(action)  // 可以直接传入 dispatch 
    })
  }
}
*/