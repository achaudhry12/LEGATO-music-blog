Rails.application.routes.draw do
  post 'auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'
  get 'artists', to: 'artists#index'
  get 'artists/:id', to: 'artists#show'
  post 'artists', to: 'artists#create'
  get 'artists/:id/songs', to: 'songs#index'
  post 'artists/:id/songs', to: 'songs#create'
  patch 'artists/:id/songs/:id', to: 'songs#update'
  delete 'artists/:id/songs/:id', to: 'songs#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
