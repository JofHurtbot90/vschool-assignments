import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addForecast} from '../../redux/actions';

class WeatherForm extends Component{
  constructor(){
    super();
    this.state = {
      timezone: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleSubmit(e){
  e.preventDefault();
  this.props.addForecast(this.state)
  this.setState({
    timezone:''
  });
}

  render(){

    return(

      <form
        onSubmit={this.handleSubmit}>

        Timezone:
        <input
          name='timezone'
          type="text" value={this.state.timezone} onChange={this.handleChange}/>

        <button>Timezone</button>
      </form>
    )
  }
}
export default connect(null, {addForecast})(WeatherForm)
