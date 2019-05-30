require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Film < ActiveRecord::Base
  belongs_to :director, :optional => true
end

class Director < ActiveRecord::Base
  has_many :films
end

get '/' do
  erb :home
end

get '/films' do
  @films = Film.all
  erb :films_index
end

get '/films/new' do
  erb :films_new
end

post '/films' do
  film = Film.new
  film.name = params[:name]
  film.year = params[:year]
  film.image = params[:image]
  film.director_id = params[:director_id]
  film.save
  redirect to("/films/#{film.id}")
end

get '/films/:id' do
  @film = Film.find params[:id]
  erb :films_show
end

get '/films/:id/edit' do
  @film = Film.find params[:id]
  erb :films_edit
end

post '/films/:id' do
  film = Film.find params[:id]
  film.name = params[:name]
  film.year = params[:year]
  film.image = params[:image]
  film.director_id = params[:director_id]
  film.save
  redirect to("/films/#{params[:id]}")
end

get '/films/:id/delete' do
  film = Film.find params[:id]
  film.destroy
  redirect to("/films")
end

get '/directors' do
  @directors = Director.all
  erb :directors_index
end

get '/directors/new' do
  erb :plants_new
end

post '/directors' do
  director = Director.new
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to("/director/#{director.id}")
end

get '/directors/:id' do
  @director = Director.find params[:id]
  erb :director_show
end

get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :director_edit
end

post '/directors/:id' do
  director = Director.find params[:id]
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to("/director/#{director.id}")
end

get '/directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to("/directors")
end

after do
  ActiveRecord::Base.connection.close
end
