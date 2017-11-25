import React from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import Footer from './components/Footer';



function App(props){

  return(
    <div>
      <Header/>
      <ContactList/>
      <Footer/>
    </div>
  )

}
export default App;
