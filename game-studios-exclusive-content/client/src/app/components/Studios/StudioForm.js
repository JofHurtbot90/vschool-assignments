import React, {Component} from 'react';


class StudioForm extends Component{
  constructor(props){
    super(props);
      this.state = {

        studioName: '',
        headquarters: '',
        established: ''

      }
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

}

render(){
  return(
    <form onSubmit={this.handleSubmit}>

      <select name="studios">
        <option value="naughty-dog">Naughty Dog</option>
        <option value="santa-monica-studio">Santa Monica Studio</option>
      </select>


    </form>
  )
}
}
export default StudioForm;
