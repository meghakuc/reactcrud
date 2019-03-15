import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Home from './components/home.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
		  <br></br>
          <h2>Welcome to React CRUD Example</h2> <br/>
		  <Link to={'/home'} className="nav-link">Go to Students List</Link>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/home' component={ Home } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
