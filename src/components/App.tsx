import React from 'react';
import { Header } from './header'
import { About } from './about'
import { Portfolio } from './portfolio';
import { Contact } from './contact'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
