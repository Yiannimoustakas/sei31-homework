require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  @weapons = query_db 'SELECT * FROM weapons'
  erb :home
end

post '/' do
  query = "INSERT INTO weapons (name, cost, damage, damageType, weight, properties) VALUES ('#{ params[:name] }', #{ params[:cost] }, '#{ params[:damage] }', '#{ params[:damageType] }', #{ params[:weight] }, '#{ params[:properties] }')"
  query_db query
  redirect to('/')
end

get '/new' do
  erb :weapons_add
end

get '/:id' do
  weapons = query_db "SELECT * FROM weapons WHERE id=#{ params[:id] }"
  @weapon = weapons.first;

  erb :weapons_show
end

get '/:id/edit' do
  weapons = query_db "SELECT * FROM weapons WHERE id=#{ params[:id] }"
  @weapon = weapons.first;

  erb :weapons_edit
end

post '/:id' do
  query = "UPDATE weapons SET name='#{ params[:name] }', cost='#{ params[:cost] }', damage='#{ params[:damage] }', damageType='#{ params[:damageType] }', weight='#{ params[:weight] }', properties='#{ JSON.stringify(params[:properties]) }' WHERE id=#{params[:id]}"

  query_db query
  redirect to("/#{params[:id]}")
end

get '/:id/delete' do
  query_db "DELETE FROM weapons WHERE id=#{ params[:id] }"
  redirect to('/')
end

def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true;
  result = db.execute sql_statement
  db.close
  result
end
