# == Route Map
#
#        Prefix Verb   URI Pattern                   Controller#Action
#          root GET    /                             mountains#index
#     mountains GET    /mountains(.:format)          mountains#index
#               POST   /mountains(.:format)          mountains#create
#  new_mountain GET    /mountains/new(.:format)      mountains#new
# edit_mountain GET    /mountains/:id/edit(.:format) mountains#edit
#      mountain GET    /mountains/:id(.:format)      mountains#show
#               PATCH  /mountains/:id(.:format)      mountains#update
#               PUT    /mountains/:id(.:format)      mountains#update
#               DELETE /mountains/:id(.:format)      mountains#destroy

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'mountains#index'
  resources :mountains
end
