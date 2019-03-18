Rails.application.routes.draw do
  get "sessions/new"
  get "/signup", to: "users#new"
  get "/help", to: "static_pages#help", as: "help"
  get "/about", to: "static_pages#about"
  get "/contact", to: "static_pages#contact"
  post "/signup", to: "users#create"
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  root "static_pages#home"

  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :account_activations, only: [:edit]
  resources :password_resets, except: [:index, :show, :destroy]
  resources :microposts, only: [:create, :destroy]
  resources :relationships, only: [:create, :destroy]
end
