import React, {Component} from 'react';
import NDList from './Artists/naughty-dog/NDList';



class ExclusiveContentForm extends Component{
  constructor(){
    super();
    this.state = {
      artists: ''
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
        <div>
          
      <form onSubmit={this.handleSubmit}>

        <select name="artists">
          <option value="select">Select</option>
          <option value={this.state.artists}>Aaron Limonick</option>
          <option value={this.state.artists}>Eytan Zana</option>
          <option value={this.state.artists}>John Sweeney</option>
          <option value={this.state.artists}>Nick Gindraux</option>
          <option value={this.state.artists}>Maciej Kuciara</option>
        </select>



          <input type="submit" value='Submit'/>

      </form>


      <NDList/>

    </div>



    )
  }
}


export default ExclusiveContentForm;
