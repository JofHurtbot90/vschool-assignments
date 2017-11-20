import React, {Component} from 'react';
import axios from 'axios';
import Color from './Color';

class RandomColor extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }

  componentWillMount() {
    axios.get('https://www.colr.org/json/color/ffba13').then(response => {
      this.setState({colors: response.data})
      }
    )
  }

  render() {
    return this.state.colors.map((color) => {
      return (<Color info={color.hex}/>)
    });
  }
}
export default RandomColor;
