require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - Show all currencies
get '/currencies' do
  @currencies = query_db 'SELECT * FROM currencies ORDER BY country ASC'
  erb :currencies_index
end

get '/currency/new' do
  erb :currencies_new
end

post '/currencies' do
  query = "INSERT INTO currencies (country, name, image) VALUES ('#{params[:country]}','#{params[:name]}','#{params[:image]}')"
  query_db query
  redirect to('/currencies')
end

# EDIT
get '/currencies/:id/edit' do
  currencies = query_db "SELECT * FROM currencies WHERE id=#{params[:id]}"
  @currencies = currencies.first
  erb :currencies_edit
end

# SHOWS
get '/currencies/:id' do
  currencies = query_db "SELECT * FROM currencies WHERE id=#{params[:id]}"
  @currency = currencies.first
  erb :currencies_show
end

# DESTROY
get '/currencies/:id/delete' do
  query_db "DELETE FROM currencies WHERE id=#{ params[:id] }"
  redirect to("/currencies")
end

post '/currencies/:id' do
  query = "UPDATE currencies SET country='#{params[:country]}', name='#{params[:name]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/currencies/#{params[:id]}")
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end