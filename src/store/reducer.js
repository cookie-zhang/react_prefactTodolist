import { INPUT_VALUE_TYPE, ADD_TODOLIST_ITEM, ITEM_DELTE, INIT_LIST_ACTION, GET_INIT_LIST} from './actionsType.js';
const defaultState = {
    inputValue:'',
    dataList: []
};

//reducer 可以接受state， 但是决不能修改state
//纯函数，给定固定输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action)=>{
    //type其实就是找到对应的传过来的数据
    if(action.type === INPUT_VALUE_TYPE){
        //将state里面的数据做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    //获取点击提交添加的内容
    if(action.type === ADD_TODOLIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataList.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === ITEM_DELTE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataList.splice(action.index,1);
        return newState;
    }
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataList = action.data;
        return newState;
    }
    if(action.type === GET_INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataList = action.data;
        return newState;
    }
    return state;
}