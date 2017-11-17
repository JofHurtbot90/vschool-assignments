import React, {Component} from 'react';

import Person from './Person';

import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then((response)=>{
      this.setState({people: response.data.results});
    })
  }

  render(){
    return this.state.people.map(person=>{
      return <Person info= {person} />
    })
  }
}

export default App;
