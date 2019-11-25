import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import First5 from './components/First5';

import './App.css';

// let zopilote;

function App() {
  return(
<Router>
  <Switch>
    <Route default path="/" component={First5} />
  </Switch>
</Router>
  )
}

export default App;
