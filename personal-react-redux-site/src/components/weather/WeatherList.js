import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../../redux/actions';
import axios from 'axios';
import WeatherForm from './WeatherForm';

export default class WeatherList extends Component {
  constructor(props){
    super(props);
    this.state = {
      cities: []
    }
  }

  componentDidMount(){
    axios.get('http://cors.vschool.io/?url=https://api.darksky.net/forecast/33722c235dde0e1f98b2c0963306637e/37.8267,-122.4233').then(response =>{
      this.setState({
        cities: response.data
      })
    })
  }

  render(){
    return(
      {this.state.cities.map((city, i) =>{
        return(
          <WeatherForm name={city.name} key={city.name + i} alt={`${city.name}`}/>
          );
        })
      }
    )
  }
}
