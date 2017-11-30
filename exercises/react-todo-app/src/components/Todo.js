import React, {Component} 'react';
import axios from 'axios';

import {ListGroupItem} from 'react-bootstrap';

class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      completed: props.info.completed
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  toggleCompleted(){
    console.log('heyo');
    axios.put('https://api.vschool.io/joshhurtado/todo/' + this.props.info._id, {completed: !this.state.completed}).then(response=>{
      this.setState(prevState=>{
        
      })
    })
  }
}
