import React from 'react';

export default class TodoApp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            inputtext: '',
            todos: [],
          editIndex: null,
            newTodos:[]
        }    
    }
    handleonChange=(event) => {
        this.setState({
            inputtext: event.target.value
        })
    }

    handleEdit=(index) => {
            this.setState({
                inputtext:this.state.todos[index],
                editIndex: index
            })
    }
    handleSubmit=()=>{
        if(this.state.editIndex != null){
            if(this.state.inputtext.length>0){
                let newTodos = this.state.todos.map((value, index)=>{
                    if(index == this.state.editIndex){
                        return this.state.inputtext;
                    }
                    else{
                        return value;
                    }
                })
                this.setState({
                    todos: newTodos,
                    inputtext: '',
                    editIndex: null
                })
            }
        }else{
        if(this.state.inputtext.length>0){
            let newTodos = [...this.state.todos, this.state.inputtext]

            this.setState({
                todos: newTodos,
                inputtext: ''
            })
            }
        }
    }

    handleDelete=(outindex)=>{
        let newTodos=this.state.todos.filter((value, index)=>{
            return index!=outindex;
        })
        this.setState({
            todos: newTodos
        })
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.inputtext} onChange={this.handleonChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            <table style={{margin: 'auto', marginTop:'100px'}}>
                <thead>
                     <tr>
                         <th>S.No</th>
                         <th>Todos</th>
                         <th>Action</th>
                     </tr>
                </thead>
        <tbody>{
            this.state.todos.map((value, index) => {
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{value}</td>
                        <td>
                            <button onClick={(event)=>{this.handleEdit(index)}}>Edit</button>
                            <button onClick={(event)=>{this.handleDelete(index)} }>Delete</button>
                        </td>
                    </tr>
                )
            })
            }</tbody>
            </table>
            </div>
        )
    }
}