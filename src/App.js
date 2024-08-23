// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import  Screen1  from './Screen1Com/Screen1';
import  Screen2  from './Screen1Com/Screen2';
import Footer from './Screen1Com/Footer';
function App() {
  return (<>
    <div className="App">
      <div style={{backgroundColor:'#e6e6fa'}}>
      <Navbar />
      <br/>
      <Screen1/>
      <Screen2/>
      {/* <Screen3/> */}
      <br/>
     </div></div>
     
     <Footer/>
     </>
  );
}

export default App;
