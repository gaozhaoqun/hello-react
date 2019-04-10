import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST_SAGA } from './actionTypes'
import { getInitJson } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  // 这里不能写 promise 了
  // axios.get('https://www.easy-mock.com/mock/5ca8bbd9a0050b65627b5722/reactmock/reactmock').then(res => {
  //   const data = res.data
  //   const action = getInitJson(data)
  //   store.dispatch(action)  // 可以直接传入 dispatch 
  // })
  
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5ca8bbd9a0050b65627b5722/reactmock/reactmock')
    const action = getInitJson(res.data)
    yield put(action)  // 由于没有 store.dispatch方法,  要用 put方法
  } catch {
    console.log('请求失败')  // 要用 try catch
  }
}

function* mySaga() {
  // 可以通过 takeEvery 去捕获每次派发的 action
  yield takeEvery(GET_INIT_LIST_SAGA, getInitList); // 捕获 GET_INIT_LIST_SAGA这个 action, 然后调用 getInitList这个方法
}

export default mySaga;  // sagas 文件相当于 reducer.js