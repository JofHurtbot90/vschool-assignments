import React, {Component} from 'react';
import Form from './Form';

class Container extends Component{
  constructor(){
    super();
    this.state = {
      forms:[]
    }

    this.newform = this.newform.bind(this);
  }

  newform(info){
    this.setState((prevState)=>{
      prevState.forms.push(info);
      return {forms: prevState.todos}
    })
  }

  render(){
    return(
      <div>
        <Form newform={this.newform}/>
      </div>
    )
  }
}
export default Container;
