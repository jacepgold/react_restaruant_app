import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <Segment basic>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route path='/menu' component={ Menu } />
          <Route path='/Item' component={ Item } />
        </Switch>
      </Segment>
    );
  }
}

export default App;
