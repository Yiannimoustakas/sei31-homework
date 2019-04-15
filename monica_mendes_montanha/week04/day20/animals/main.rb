require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do all this for you automagically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Animal < ActiveRecord::Base
  belongs_to :group, :optional => true # Since Rails 5
end

class Group < ActiveRecord::Base
  has_many :animals
end

get '/' do
  erb :home
end

# INDEX - Show all animals
get '/animals' do
  @animals = Animal.all
  erb :animals_index
end

# CREATE ANIMAL
post '/animals' do
  group = Group.find(params[:group_id])

  animal = Animal.new
  animal.name = params[:name]
  animal.image = params[:image]

  group.animals << animal
  group.save

  redirect to ("/groups/#{ group.id }")
end


# SHOW ANIMAL
get '/animals/:id' do
  @animal = Animal.find params[:id]
  erb :animals_show
end

# EDIT ANIMAL
get '/animals/:id/edit' do
  @animal = Animal.find params[:id]
  erb :animals_edit
end

# UPDATE ANIMAL
post '/animals/:id' do
  animal = Animal.find params[:id]
  animal.name = params[:name]
  animal.image = params[:image]
  animal.save
  redirect to ("/animals/#{ animal.id }")
end

# DELETE ANIMAL
get '/animals/:id/delete' do
  animal = Animal.find params[:id]
  animal.destroy
  redirect to("/animals")
end


# INDEX - Show all groups
get '/groups' do
  @groups = Group.all
  erb :groups_index
end

# NEW GROUP
get '/groups/new' do
  erb :groups_new
end

# CREATE GROUP
post '/groups' do
  group = Group.new
  group.name = params[:name]
  group.save
  redirect to ("/groups/#{ group.id }")
end

# SHOW GROUP
get '/groups/:id' do
  @group = Group.find params[:id]
  erb :groups_show
end

# EDIT GROUP
get '/groups/:id/edit' do
  @group = Group.find params[:id]
  erb :groups_edit
end

# UPDATE GROUP
post '/groups/:id' do
  group = Group.find params[:id]
  group.name = params[:name]
  group.save
  redirect to("/groups/#{ group.id }")
end

# DELETE GROUP
get '/groups/:id/delete' do
  group = Group.find params[:id]
  group.destroy
  redirect to("/groups")
end

# binding.pry
