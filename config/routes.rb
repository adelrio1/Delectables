Rails.application.routes.draw do
  get 'static_pages/root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :recipes, only: [:index, :create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

end
