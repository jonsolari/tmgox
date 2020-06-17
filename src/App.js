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
import Register from './components/Register';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App(){
      return(
        <div class="main">
          <Router>
            <div class="tab">
              <Link to="/"><img class="logo" alt="tMGOX logo" src="/img/tMGox.png"/></Link>
              <Link to="/" class="lynx">THE FIRST FIVE</Link>
              <Link to="/extendedplays" class="lynx">EPs &c.</Link>
              <Link to="/goodluckchief" class="lynx">GOOD LUCK CHIEF</Link>
              <Link to="/about" class="lynx">ABOUT</Link>
              <p class="lynx"><Link to="/register" class="white">REGISTER</Link>/<Link to="/login" class="white">LOGIN</Link></p>
            </div>
            <div class="rightside">
            <div class="header">
              <h2 class="titletext">the Mountain Goats Online eXchange</h2>
            <p>a place to track prices of your favorite records by John Darnielle et al (or by other bands too)</p>
            </div>
          
              <Route exact path="/" component={First5} />
              <Route exact path="/extendedplays" component={EPs} />
              <Route exact path="/goodluckchief" component={GoodLuck} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/wishlist" component={Wishlist} />
              </div>
          </Router>   
          
          
        </div>
  )
}


export default App;
