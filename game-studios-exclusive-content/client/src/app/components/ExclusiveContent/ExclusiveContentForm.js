import React, {Component} from 'react';
import NDList from './Artists/naughty-dog/NDList';
import SMSList from './Artists/santa-monica-studio/SMSList';

class ExclusiveContentForm extends Component{
  constructor(){
    super();
    this.state = {
      artists: '',
      studio: '',
      game: ''
    }
  }

  handleChange = (e) =>{
    e.persist();
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          value={this.state.artists}
          onChange={this.handleChange}
          name='artists'
          placeholder='Artists'/>

        <input
          type="text"
          value={this.state.studio}
          onChange={this.handleChange}
          name='studio'
          placeholder='Studio'/>

        <input
          type="text"
          value={this.state.game}
          onChange={this.handleChange}
          name='game'
          placeholder='Game'/>

      </form>

    )
  }
}


export default ExclusiveContentForm;
