import React, {Component} from 'react';
import Destination from './Destination.js';
import Boxes from './Boxes.js';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.vacationSpots = [
      {
        place:`Croatia`,
        price: `$1250`,
        timeToGo: `Spring`
      },{
        place:`Cancun`,
        price:`$1050`,
        timeToGo: `Summer`
      },{
        place: `China`,
        price: `$1200`,
        timeToGo: `Fall`
      },{
        place: `Germany`,
        price: `$750`,
        timeToGo: `Spring`
      },{
        place: `Fiji`,
        price: `$1500`,
        timeToGo: `Winter`
      },{
        place:`Poland`,
        price: `$1175`,
        timeToGo: `Spring`
      },{
        place: `Oregon`,
        price: `$350`,
        timeToGo: `Summer`
      },{
        place: `San Francisco`,
        price: `$650`,
        timeToGo: `Fall`
      }
    ];
  };

  generateVacationSpotsArray() {
    return this.vacationSpots.map((vacationSpot, index) =>
      <div key = {vacationSpot.place + index}>
        <h1>{vacationSpot.place}</h1>
        <h2>{vacationSpot.price}</h2>
        <h3>{vacationSpot.timeToGo}</h3>
      </div>
    );
  };

  render() {
    return(
      <div>
        
        {this.generateVacationSpotsArray()}

      </div>
    );
  };

}

export default App;
