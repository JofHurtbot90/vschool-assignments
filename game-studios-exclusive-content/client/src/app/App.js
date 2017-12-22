import React from 'react';
import NavBar from './components/NavBar/NavBar';
import {Switch, Route} from 'react-router-dom';
import ExclusiveContentForm from './components/ExclusiveContent/ExclusiveContentForm';
import GamesForm from './components/Games/GamesForm'


function App(props){
  return(
    <div>
      <NavBar/>

        <Switch>
        <Route exact path='/' component={ExclusiveContentForm}/>
      <Route path='/games' component={GamesForm}/>
        </Switch>


    </div>

  )
}
export default App;
