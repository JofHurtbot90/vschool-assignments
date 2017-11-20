import React, {Component} from 'react';
import axios from 'axios';
import Person from './Person';


class HitList extends Component {
  constructor(){
    super();
    this.state ={
      target: []
    }
  }

  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then(response=>{
      this.setState({target: response.data})
      })

  }

render(){
      return(
        <div>

           {this.state.target.map((person) =>{
              return(
                  <Person name={person.name} />
              );
          })}
      </div>
      );
   }
}

export default HitList;
