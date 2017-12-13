import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllForecast} from '../../redux/actions';
import WeatherForm from './WeatherForm';

class WeatherList extends Component {
  componentDidMount(){
    this.props.getAllForecast();
  }

  render(){
    const timezone =
     Object.keys(this.props.timezones).map((timezone, i) =>

      <WeatherForm name={timezone.name} key={timezone.name + i} />
     )

    return(
    <div>
      {this.props.timezones.currently.time}
    </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getAllForecast})(WeatherList)
