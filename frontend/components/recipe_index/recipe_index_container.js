import { connect } from 'react-redux';
import {  fetchRecipes, fetchRecipe, fetchTagRecipes } from '../../actions/recipe_actions';
import { selectAllRecipes, selectRecipe } from '../../reducers/selectors';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state, ownProps) => {
  return{
  recipes: selectAllRecipes(state),
  // recipe: selectRecipe(state, ownProps.params.recipeId)
  // tag: ownProps.params.tagTitle,
};};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  // fetchRecipe: () => dispatch(fetchRecipe())
  // fetchTagRecipes: () => dispatch(fetchTagRecipes(ownProps.params.tagTitle))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex);