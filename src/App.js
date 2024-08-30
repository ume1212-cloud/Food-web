// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import  Categaries  from './pages/Categaries';
import  DisplayScreens  from './pages/DisplayScreens';
import Footer from './components/Footer';
function App() {
  return (<>
    <div className="App">
      <div style={{backgroundColor:'#e6e6fa'}}>
      <Navbar />
      <br/>
      <Categaries/>
      <DisplayScreens/>
     
      <br/>
     </div></div>
     
     <Footer/>
     </>
  );
}

export default App;
