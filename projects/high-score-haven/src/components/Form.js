import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      game: '',
      scoreSet: '',
      date: '',
      trashTalk: '',
      trashTalkArray: ['YOU SUCK',
      'YOU LACK DISCIPLINE',
      'WEAK']
    }

    this.handleInputsChange = this.handleInputsChange.bind(this);
  }

  handleInputsChange(e) {
    e.persist();
    if (e.target.type === 'checkbox') {
      if (e.target.checked){
        this.setState({trashTalk: this.randomTrashTalk()})
      }else{
        this.setState({trashTalk: ''})
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

randomTrashTalk(){
  let index = Math.floor(Math.random() * this.state.trashTalkArray.length)
  return this.state.trashTalkArray[index];
}


  render() {
    const block = {
      display: 'block',

    }
    return (<div>
      <form onSubmit={(e) => this.props.submit(e, this.state)}>

      Name:
        <input style={block} name='name' required onChange={this.handleInputsChange} value={this.state.name}/>

      Game:
        <input style={block} name='game' required onChange={this.handleInputsChange} value={this.state.game}/>

      ScoreSet:
        <input style={block} name='scoreSet' minLength='2'  onChange={this.handleInputsChange} value={this.state.scoreSet}/>

      Date:
        <input style={block} name='date' onChange={this.handleInputsChange}  value={this.state.date}/>

      Trash Talk Message
        <input style={block} name='trashTalk' type='checkbox' onChange={this.handleInputsChange} value={this.state.trashTalkArray}/>


      <button>submit</button>
      </form>
    </div>
    )
  }
}
export default Form;
