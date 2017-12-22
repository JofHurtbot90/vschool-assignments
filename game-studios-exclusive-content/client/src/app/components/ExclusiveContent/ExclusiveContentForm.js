import React, {Component} from 'react';
import NDList from './Artists/naughty-dog/NDList';



class ExclusiveContentForm extends Component{
  constructor(){
    super();
    this.state = {
      artist: ''
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

        <select name="artist" onChange={this.handleChange}>
          <option value="select">Select</option>
        <option value='aaron limonick'>Aaron Limonick</option>
      <option value='eytan zana'>Eytan Zana</option>
    <option value='john sweeney'>John Sweeney</option>
  <option value='nick gindraux'>Nick Gindraux</option>
<option value='maciej kuciara'>Maciej Kuciara</option>
        </select>



          <input type="submit" value='Submit'/>

      </form>


      <NDList artist={this.state.artist} />

    </div>



    )
  }
}


export default ExclusiveContentForm;
