# == Route Map
#
#     Prefix Verb   URI Pattern                Controller#Action
#       root GET    /                          bands#index
#      bands GET    /bands(.:format)           bands#index
#            POST   /bands(.:format)           bands#create
#   new_band GET    /bands/new(.:format)       bands#new
#  edit_band GET    /bands/:id/edit(.:format)  bands#edit
#       band GET    /bands/:id(.:format)       bands#show
#            PATCH  /bands/:id(.:format)       bands#update
#            PUT    /bands/:id(.:format)       bands#update
#            DELETE /bands/:id(.:format)       bands#destroy
#     albums GET    /albums(.:format)          albums#index
#            POST   /albums(.:format)          albums#create
#  new_album GET    /albums/new(.:format)      albums#new
# edit_album GET    /albums/:id/edit(.:format) albums#edit
#      album GET    /albums/:id(.:format)      albums#show
#            PATCH  /albums/:id(.:format)      albums#update
#            PUT    /albums/:id(.:format)      albums#update
#            DELETE /albums/:id(.:format)      albums#destroy

Rails.application.routes.draw do
  root :to => 'bands#index'
  resources :bands
  resources :albums
end
