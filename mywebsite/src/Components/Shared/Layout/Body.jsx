import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import UserList from '../../../Components/Users/UserList';
import UserDetils from '../../../Components/Users/UserDetils';
import About from '../../../Components/InfoPages/About';
import { Route, Switch } from 'react-router-dom';

function Body() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route path="/users/:id" component={UserDetils} />
          <Route path="/users" component={UserList} />
  
          <Route path="/about" component={About} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }

export default Body;