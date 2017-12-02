import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../../redux/contacts';


class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.add(this.state);

    this.setState({
      title: '',
      description: '',
      img: ''
    });
  }

render(){
  return(
    <form onSubmit={this.handleSubmit}>
      <input
        placeholder='Title Name'
        name='title'
        value={this.state.title}
        type="text"
        onChange={this.handleChange}/>
      <input type="text" name='description' value={this.state.description} onChange={this.handleChange}/>
    <input type="text" name='img' value={this.state.img} onChange={this.handleChange}/>
    <button>submit</button>
    </form>
  )
}
}
export default connect(null, {add},)(AddContactForm)
