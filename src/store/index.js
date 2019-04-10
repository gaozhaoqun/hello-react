import { createStore, applyMiddleware, compose } from 'redux'  // applyMiddleware是引入 redux-thunk
import reducer from './reducer'

// import thunk from 'redux-thunk';  // applyMiddleware是引入 redux-thunk
import createSagaMiddleware from 'redux-saga'  // 引入 saga
import mySaga from './sagas'


const sagaMiddleware = createSagaMiddleware() // 创建个 saga
const composeEnhancers = typeof window ===  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

/* 
  store里的数据, 
    1. 如果要被改变, 首先创建个 action, 把数据给到store
    2. 调用 store.dispatch()
*/
const enhancer = composeEnhancers(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
);
const store = createStore(
  reducer,
  enhancer 
)
sagaMiddleware.run(mySaga)

export default store

/*
  https://github.com/zalmoxisus/redux-devtools-extension
  配置 createStore 第二个参数 兼容 redux-thunk 和 redux-dev-tools

  https://github.com/reduxjs/redux-thunk   // redux-thunk
  Installation  
  npm install redux-thunk
  import { createStore, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  配置好 redux-thunk就可以把 组件中异步请求的代码, 移到 actionCreators里
*/
