import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ProductsIndexPage from "./ProductsIndexPage";
import ProductShowPage from "./ProductShowPage";
import ProductNewPage from "./ProductNewPage";
import Home from './Home';
import { Session } from '../requests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
		Session.create({
			email: 'js@winterfell.gov',
			password: 'supersecret',
		}).then((user) => {
			this.setState({
				currentUser: user,
			});
		});
	}

  render() {
    return (
      // <ProductShowPage />
      <BrowserRouter>
        <div className="App">
        <NavBar />
        <Switch>
          <Route 
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/products"
            exact
            component={ProductsIndexPage}
          />
          <Route
            path="/products/new"
            exact
            component={ProductNewPage}
          />
          <Route
            path="/products/:id"
            component={ProductShowPage}
          />
        </Switch>
        </div>
      </BrowserRouter>  
    )
  }
}

export default App;
