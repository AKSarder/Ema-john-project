import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>

        <Header></Header>

        <Switch>

          <Route path='/home'>
            <Header></Header>
          </Route>

          <Route >

          </Route>
        </Switch>

      </Router>

      <Shop></Shop>
    </div>
  );
}

export default App;
