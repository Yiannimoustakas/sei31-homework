require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/heroes' do
  @dota = query_db "SELECT * FROM dota"
  erb :hero_index
end

get '/heroes/new' do
  erb :hero_new
end

post '/heroes' do
  query = "INSERT INTO dota (name, type, image) VALUES ('#{ params[:name] }', '#{ params[:type] }', '#{ params[:image] }')"
  query_db query
  redirect to('/heroes')
end

get '/heroes/:id' do
  dota = query_db "SELECT * FROM dota WHERE id=#{ params[:id] }"
  @hero = dota.first
  erb :hero_show
end

get '/heroes/:id/edit' do
  dota = query_db "SELECT * FROM dota WHERE id=#{ params[:id] }"
  @hero = dota.first
  erb :hero_edit
end

post '/heroes/:id' do
  query = "UPDATE dota SET name='#{ params[:name]}', type='#{ params[:type] }', image='#{ params[:image]  }' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/heroes/#{ params[:id] }")
end

get '/heroes/:id/delete' do
  query_db "DELETE FROM dota WHERE id=#{ params[:id] }"
  redirect to("/heroes")
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end
