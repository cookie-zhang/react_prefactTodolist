import { takeEvery, put  } from 'redux-saga/effects';
import { GET_INIT_LIST} from './actionsType';
import axios from 'axios'
import {initListAction} from './actionCreators'

// generator 函数
function* getInitList(){
    const res =  yield axios.get('/api/list.json');
    const action = initListAction( res.data );
    debugger;
    yield put(action);

}

function* mySaga() {
    yield takeEvery (GET_INIT_LIST, getInitList)  // 利用takeEver去捕获派发的action，执行getInitList方法
  }

  
  export default mySaga;