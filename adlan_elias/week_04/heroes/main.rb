require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Hero < ActiveRecord::Base
  belongs_to :archtype, :optional => true
end

class Archtype < ActiveRecord::Base
  has_many :heros
end

get '/' do
  erb :home
end

get '/heros' do
  @heros = Hero.all
  erb :heros_index
end

get '/heros/new' do
  erb :heros_new
end

post '/heros' do
  hero = Hero.new
  hero.name = params[:name]
  hero.description = params[:description]
  hero.image = params[:image]
  hero.archtype_id = params[:archtype_id]
  hero.save

  redirect to("/heros/#{ hero.id }")
end

get '/heros/:id' do
  @hero = Hero.find params[:id]
  erb :heros_show
end

get '/heros/:id/edit' do
  @hero = Hero.find params[:id]
  erb :heros_edit
end

post '/heros/:id' do
  hero = Hero.find params[:id]
  hero.name = params[:name]
  hero.description = params[:description]
  hero.image = params[:image]
  hero.archtype_id = params[:archtype_id]
  hero.save
  redirect to("/heros/#{ params[:id] }")
end

get '/heros/:id/delete' do
  hero = Hero.find params[:id]
  hero.destroy
  redirect to("/heros")
end

get '/archtypes' do
  @archtypes = Archtype.all
  erb :archtypes_index
end

get '/archtypes/new' do
  erb :archtypes_new
end

post '/archtypes' do
  archtype = Archtype.new
  archtype.name = params[:name]
  archtype.image = params[:image]
  archtype.save
  redirect to("/archtypes/#{ archtype.id }")
end

get '/archtypes/:id' do
  @archtype = Archtype.find params[:id]
  erb :archtypes_show
end

get '/archtypes/:id/edit' do
  @archtype = Archtype.find params[:id]
  erb :archtypes_edit
end

post '/archtypes/:id' do
  archtype = Archtype.find params[:id]
  archtype.name = params[:name]
  archtype.image = params[:image]
  archtype.save
  redirect to("/archtypes/#{ archtype.id }")
end

get '/archtypes/:id/delete' do
  archtype = Archtype.find params[:id]
  archtype.destroy
  redirect to("/archtypes")
end

after do
  ActiveRecord::Base.connection.close
end
