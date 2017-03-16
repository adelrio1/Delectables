class Api::RecipesController < ApplicationController

  def index
    if !params[:tag_id]
      @recipes = Recipe.all
    else
      @recipes = Recipe.where(tag_id: params[:tag_id]).all
    end
    render json:@recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
    @recipe = Recipe.create!(recipe_params)
    if @recipe.save
      render "api/recipes/show/:id"
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      render "api/recipes/show/:id"
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :directions)
  end
end
