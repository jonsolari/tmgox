import React from "react";
import {
    BrowserRouter as Router,
    
    Route,
    Link
  } from "react-router-dom";
import First5 from './components/First5';
import GoodLuck from './components/GoodLuck';
import EPs from './components/EPs';
import About from './components/About';

import './App.css';

function App(){
      return(
          <Router>
            <div class="tab">
              <h1>TMGOX the Mountain Goats Online Exchange</h1>
              <Link to="/"><img class="logo" alt="tMGOX logo" src="/img/tMGox.png"/></Link>
              <Link to="/" class="lynx">THE FIRST FIVE</Link>
              <Link to="/extendedplays" class="lynx">EPs</Link>
              <Link to="/goodluckchief" class="lynx">GOOD LUCK CHIEF</Link>
              <Link to="/about" class="lynx">ABOUT</Link>
            </div>
       
          
              <Route exact path="/" component={First5} />
              <Route exact path="/extendedplays" component={EPs} />
              <Route exact path="/goodluckchief" component={GoodLuck} />
              <Route exact path="/about" component={About} />
              
          
          </Router>   
  )
}


export default App;
