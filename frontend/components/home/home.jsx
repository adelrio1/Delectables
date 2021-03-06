import React from 'react';
import { login, logout, signup } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router';
import RecipeIndex from '../recipe_index/recipe_index_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="home-container">
        <div className="img-container">
          <img className="home-img"
            src="https://res.cloudinary.com/dg0cmca7a/image/upload/v1489704383/michael-browning-188999_agnvtl.jpg"
            alt="glasses" />
        </div>
        <RecipeIndex/>
      </div>
    );
  }
}

export default withRouter(Home);
