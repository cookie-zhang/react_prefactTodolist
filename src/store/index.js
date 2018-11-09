import { createStore, applyMiddleware, compose  } from 'redux'  // applyMiddleware  使用中间件需要用的方法,翻译就叫应用中间件
import reducer from './reducer'
import todoSagas from './TodoSagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()也是一个中间件，redux也是中间件，所以写在一块
  enhancer
  //redux devTools 方便代码调试，翻译成如果window下面有这个变量（__REDUX_DEVTOOLS_EXTENSION__），那么执行变量下面的方法（__REDUX_DEVTOOLS_EXTENSION__()）
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  // sagaMiddleware.run()方法，让todoSagas执行起来
  sagaMiddleware.run(todoSagas);

export default store;