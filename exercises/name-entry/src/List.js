import React, {Component} from 'react';
import Name from './Name';

class List extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      names: []
    }
    this.submitName = this.submitName.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.deleteName = this.deleteName.bind(this)
  }
  submitName(event) {
    event.preventDefault()
    this.setState((prevState) => {
      const names = [...prevState.names]
      names.push(prevState.input)
      return {names, input: ""}
    })
  }


  onInputChange(event) {
    event.persist()
    this.setState(()=>{
      return {input: event.target.value}
    })
  }

  deleteName(index) {
    this.setState(prevState => {
      const names = [...this.state.names];
      names.splice(index, 1)
      return {names}
    })
  }

  render() {
    const namesList = this.state.names.map((name, i) => {
      return <Name name={name} key={name + i} delete={()=>this.deleteName(i)}/>
        })

        return (
        <div>

          <form onSubmit={this.submitName}>
            <input onChange={this.onInputChange} value={this.state.input}/>
            <button onClick={this.submitName}>submit</button>
          </form>
          {namesList}

        </div>
      )
  }
}
export default List;
