import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';

function App(){
  return(
    <div>
      <Navbar/>

      <Switch>

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>

      </Switch>
      
      <Footer/>
    </div>
  )
}
export default App;
