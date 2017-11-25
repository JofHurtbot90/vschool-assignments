import React, {Component} from 'react';
import Output from './Output';
import Form from './Form';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      forms: []
    }
  }

  handleSubmit = (e, info) => {
    e.preventDefault();
    this.setState(prevState => {
      prevState.forms.push(info)
      return {forms: prevState.forms}
    })
  }

  render() {
    return (
      <div>
        <Form submit={this.handleSubmit}/>
          <div className='tableDiv'>

          <table>
            <tr>
              <th>Name</th>
              <th>Game</th>
              <th>Date</th>
              <th>Score</th>
            </tr>
            
            <tbody>
            {this.state.forms.map(form => {
          return (
            <Output name={form.name} game={form.game} date={form.date} scoreSet={form.scoreSet} trashTalk={form.trashTalk}/>)
        })
      }</tbody>

    </table>
  </div>
</div>
    )
  }
}

export default Container;
