import React from 'react';
import NavBar from './components/NavBar/NavBar';
import {Switch, Route} from 'react-router-dom';
import StudioForm from './components/Studios/StudioForm';
import ExclusiveContentForm from './components/ExclusiveContent/ExclusiveContentForm';
import GamesForm from './components/Games/GamesForm';


function App(props){
  return(
    <div>
      <NavBar/>

        <Switch>
          <Route exact path='/' component={StudioForm}/>
          <Route path='/exclusive-content' component={ExclusiveContentForm}/>
          <Route path='/games' component={GamesForm}/>
        </Switch>


    </div>

  )
}
export default App;
