import React, {Component} from 'react';

import Name from './Name.js';

class NameContainer extends Component {
  constructor() {
    super();

    this.names = [
      "Bobby",
      "Derek",
      "Frank",
      "Lanie",
      "Neil",
      "Andrew",
      "Brandon",
      "Josh",
      "Kyle",
      "Jeremy",
      "Luke",
      "Adam",
      "Calvin",
      "Dan"
    ]
  }
    render() {
      return this.names.map((name, i) => {
        return <Name firstName={name} key={name + i}/>
      })
    }

}

export default NameContainer;
