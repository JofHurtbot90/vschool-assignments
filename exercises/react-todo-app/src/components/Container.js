import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import axios from 'axios';
import TodoList from './components/TodoList';

class Container extends Component{
  constructor(){
    super();
    this.state = {
      todos: []
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount(){
    axios.get('https://api.vschool.io/joshhurtado/todo').then(response()=>{
      this.setState({todos: response.data.reverse()})
    })
  }
  deleteTodo(event){
    event.persist();
    axios.delete('https://api.vschool.io/joshhurtado/todo/' + event.target.id).then((response)=>{
      console.log(response)
      this.setState((prevState)=>{
        const index = prevState.todos.findIndex(todo=>todo._id === event.target.id);
        prevState.todos.splice(index, 1);
        return {todos: prevState.todos}
      })
    })
  }
  addTodo(info){
    axios.post('https://api.vschool.io/joshhurtado/todo/', info).then(response=>{
      this.setState(prevState=>{
        const newInfo = response.data;
        const todos = [newInfo, ...prevState.todos];
        return {todos: todos}
      })
    })
  }
  render(){
    return(
      <div>
        <TodoForm addTodo={this.addTodo} />
      <TodoList todos={this.state.todos} delete={this.deleteTodo} />
      </div>
    )
  }
}
export default Container;
