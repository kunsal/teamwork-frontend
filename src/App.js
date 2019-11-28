import React, { Component } from 'react';
import './App.css';
import Login from './components/login'; 
import Logout from './components/logout';
import Feeds from './components/feeds';
import NotFound from './components/not-found';
import Navbar from './components/common/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    pages: [
      {name: 'Home', link: '/', component: Feeds},
      // {name: 'Login', link: '/login', component: Login},
    ]
  }
 
  render() {
    const { pages } = this.state;
    return ( 
      <React.Fragment>
        <main className="container">
          <Navbar pages={ pages } />
          <Switch>
            {
              pages.map(page => ( 
                <Route path = {
                  page.link
                }
                exact component = {
                  page.component
                }
                key={page.link}
                />
              ))
            }
            <Route path="/not-found" component={ NotFound } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/logout" component={ Logout } />
            <Redirect from="/" exact  to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
