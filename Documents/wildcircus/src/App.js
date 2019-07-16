import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Show from'./Components/Show/Show';
import Info from './Components/Info/Info';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Home />
      <Route path='/contact' exact component={Contact}/>
      <Route path='/info' exact component={Info}/>
      <Route path='/show' exact component={Show}/>
    </div>
  );
}

export default App;
