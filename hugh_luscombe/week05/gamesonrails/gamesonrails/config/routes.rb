Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/' => 'pages#home'

  get '/eightball' => 'eightball#form'
  get '/eightball/result' => 'eightball#result'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/result' => 'secretnumber#result'

  get '/rockpaperscissors/' => 'rockpaperscissors#form'
  get '/rockpaperscissors/result' => 'rockpaperscissors#result'
end
