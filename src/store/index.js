import { createStore, applyMiddleware, compose } from 'redux'  // applyMiddleware是引入 redux-thunk
import thunk from 'redux-thunk';  // applyMiddleware是引入 redux-thunk
import reducer from './reducer'

const composeEnhancers = typeof window ===  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(
  reducer,
  enhancer 
)

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
