import React, {Component} from 'react';

class Travel extends Component {
  constructor() {
    super();
    this.state = {

      firstName: '',
      lastName: '',
      Age: '',
      Gender: 'Select gender',
      Location: '',
      dietaryRestrictions: ''
    }
    this.handleInputsChange = this.handleInputsChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAge: ${this.state.Age}\nGender: ${this.state.Gender}\nLocation: ${this.state.Location}\nDietary Restrictions: ${this.state.dietaryRestrictions}\n`)
  }
  handleInputsChange(e) {
    const target = e.target;

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  
  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>

        <input name='firstName' onChange={this.handleInputsChange} value={this.state.one}/>
        <input name='lastName' onChange={this.handleInputsChange} value={this.state.two}/>
        <input name='Age' onChange={this.handleInputsChange} value={this.state.three}/>
        <input name='Location' onChange={this.handleInputsChange} value={this.state.four}/>
        <input name='Gender' type='radio' onChange={this.handleInputsChange} value='Male'/>Male
        <input name='Gender' type='radio' onChange={this.handleInputsChange} value='Female'/>Female
        <input name='dietaryRestrictions' type='checkbox' onChange={this.handleInputsChange} value='vegetarian'/>vegetarian
        <input name='dietaryRestrictions' type='checkbox' onChange={this.handleInputsChange} value='gluten free'/>gluten free
        <input name='dietaryRestrictions' type='checkbox' onChange={this.handleInputsChange} value='lactose free'/>lactose free
        <button>submit</button>

      </form>
    </div>)
  }
}

export default Travel;
