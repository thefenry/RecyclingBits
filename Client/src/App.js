import React from 'react';
import { BrowserRouter,
         Route,
         Switch } from 'react-router-dom';

import HomeContainer from './components/HomeContainer';
import './css/style.css';

/*======================================================================
// This will handle all routes for the program. If one 
// of the programmed paths isn't matched, it will load 
// the default container.
======================================================================*/
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={HomeContainer} />
      <Route component={HomeContainer} />
    </Switch>
  </BrowserRouter>
)

export default App;