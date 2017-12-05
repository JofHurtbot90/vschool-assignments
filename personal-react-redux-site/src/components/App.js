import React from 'react';
import Header from './Header';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Cities from './Cities';

export default function App(props){
  return(
    <main>
    <Header/>

    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/cities' component={Cities}></Route>
    </Switch>
    </main>
  )

}
