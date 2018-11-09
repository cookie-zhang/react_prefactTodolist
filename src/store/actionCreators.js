import { INPUT_VALUE_TYPE, ADD_TODOLIST_ITEM, ITEM_DELTE, INIT_LIST_ACTION, GET_INIT_LIST} from './actionsType';
export const getInputChangeAction = (value)=>{
    return {
        type: INPUT_VALUE_TYPE,
        value
    }
}
export const getBtnAction = (value)=>{
    return {
        type: ADD_TODOLIST_ITEM,
        value
    }
}
export const getDelterItemAction = (index)=>{
    return {
        type: ITEM_DELTE,
        index
    }
}
export const  initListAction= (data)=>{
    return {
        type: INIT_LIST_ACTION,
        data
    }
}
export const getInitList = ()=>{
    return{
        type: GET_INIT_LIST
    }
}