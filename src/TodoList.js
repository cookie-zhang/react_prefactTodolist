import React, {Component} from 'react';
import 'antd/dist/antd.css';
import TodoListUi from './TodoListUi'
import store from './store/index.js'
import { getInitList, getInputChangeAction, getBtnAction, getDelterItemAction } from './store/actionCreators'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state= store.getState();
        //this绑定区域
        this.handlChange = this.handlChange.bind(this);
        this.handleChaneNew = this.handleChaneNew.bind(this);
        this.handlBtnClick = this.handlBtnClick.bind(this);
        this.handlItemDelte = this.handlItemDelte.bind(this);
        //新的数据已经被派发出去后，数据发生变化， 所以要在这里订阅感知数据的变化，拿到最新的数据渲染
        store.subscribe(this.handleChaneNew)


    }
    render(){
        return(
           <TodoListUi 
                inputValue = {this.state.inputValue}
                handlChange={this.handlChange} 
                handlBtnClick={this.handlBtnClick}
                handlItemDelte={this.handlItemDelte}
                dataList={this.state.dataList}
           />
        )
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action); //通过中间件saga的配置，不仅仅是reducer可以接收的到派发的action，saga也可以就收得到
    }


    handlChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleChaneNew(){
      //感知到这个变化以后，让组件渲染最新的数据
      this.setState(store.getState())
    }
    handlBtnClick(){
        const action = getBtnAction(this.state.inputValue);
        store.dispatch(action);
    }
    handlItemDelte(index){
        const action = getDelterItemAction(index);
        store.dispatch(action);
    }

}
export default TodoList;