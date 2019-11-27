import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Feeds from './components/feeds';
import NotFound from './components/not-found';
import Navbar from './components/common/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    pages: [
      {name: 'Home', link: '/', component: Feeds},
      {name: 'Login', link: '/login', component: Login},
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
            <Redirect from="/" exact  to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
