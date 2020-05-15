import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/header';
import ShoppingCart from './components/shopping-cart';
import Home from './components/home';


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/shopping-cart" exact component={ShoppingCart} />
        <Route path="/" exact component={Home} />
      </Switch>
      
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


