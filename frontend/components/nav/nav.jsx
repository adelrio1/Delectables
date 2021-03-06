import React from 'react';
import { Link, hashHistory } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "Guest", password: "password"});
  }

  login() {
    hashHistory.push('/login');
  }

  signup() {
    hashHistory.push('/signup');
  }

  createRecipe() {
    hashHistory.push('/recipes/create');
  }

  notLoggedIn() {
    return(
      <div className="header-buttons">
        <button
          className="header-button"
          onClick={this.handleGuest}>Demo</button>
        <button
          className="header-button"
          onClick={this.login}>Log In</button>
        <button
          className="header-button"
          onClick={this.signup}>Sign Up</button>
      </div>
    );
  }

  loggedIn() {
    return(
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <button className="header-button" onClick={this.createRecipe}>Create Recipe</button>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
  }

  render() {
    const navbuttons = this.props.currentUser ?
      this.loggedIn() :
      this.notLoggedIn();

    return(
      <nav className="navbar">

        <Link to="/" className="header-link">

          <label className="header-title">Delectables </label>
          <label className="sub-header-title">find and upload your favorite recipes</label>

        </Link>

        <div className="header-buttons">
          { navbuttons }

        </div>
      </nav>
    );
  }

}

export default Nav;
