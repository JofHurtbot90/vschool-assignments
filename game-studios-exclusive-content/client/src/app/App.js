import React from 'react';
import NavBar from './components/NavBar/NavBar';
import {Switch, Route} from 'react-router-dom';
import ExclusiveContentForm from './components/ExclusiveContent/ExclusiveContentForm';


function App(props){
  return(
    <div>
      <NavBar/>

        <Switch>
        <Route exact path='/' component={ExclusiveContentForm}/>
        </Switch>


    </div>

  )
}
export default App;
