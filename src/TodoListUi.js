import React from 'react'
import { Input,Button,List } from 'antd';

const TodoListUi = (props)=>{
    return(
        <div style={{margin:'10px 0 0 10px'}}>
            <Input value={props.inputValue} onChange={props.handlChange} style={{width:'300px', marginRight:'10px'}} />
            <Button type="primary" onClick={props.handlBtnClick}>提交</Button>
            <List
                style={{width:"400px",marginTop:'10px'}}
                bordered
                dataSource={props.dataList}
                renderItem={(item, index) => (<List.Item onClick={()=>{ props.handlItemDelte(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
// class TodoListUi extends Component {
//     render(){
//         return(
//             <div style={{margin:'10px 0 0 10px'}}>
//                 <Input value={this.props.inputValue} onChange={this.props.handlChange} style={{width:'300px', marginRight:'10px'}} />
//                 <Button type="primary" onClick={this.props.handlBtnClick}>提交</Button>
//                 <List
//                     style={{width:"400px",marginTop:'10px'}}
//                     bordered
//                     dataSource={this.props.dataList}
//                     renderItem={(item, index) => (<List.Item onClick={(index)=>{ this.props.handlItemDelte(index)}}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUi;