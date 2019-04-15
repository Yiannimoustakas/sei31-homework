require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#Index - Show all Butterflies
get '/apples' do
  @apples = query_db "SELECT * FROM apples"
  erb :apples_index
end

#form for adding new apples
get '/apples/new' do
  erb :apples_new
end

#CREATE - new apple
post '/apples' do
  query = "INSERT INTO apples (name, place_of_origin, baking, sweetness, image) VALUES ('#{params[:name]}', '#{params[:place_of_origin]}', '#{params[:baking]}', '#{params[:sweetness]}', '#{params[:image]}')"
  query_db query
  redirect to ('/apples')
  query
end

#shows a single apple
get '/apples/:id' do
  apples = query_db "SELECT * FROM apples WHERE id=#{ params[:id] }"
  @apples = apples.first
  erb :apples_show
end

# EDIT - Apple edit form
get '/apples/:id/edit' do
  apples = query_db "SELECT * FROM apples WHERE id=#{ params[:id] }"
  @apple = apples.first
  erb :apples_edit
end

# Update action
post '/apples/:id' do
  query = "UPDATE apples SET name='#{params[:name]}', place_of_origin='#{params[:place_of_origin]}', baking='#{params[:baking]}', sweetness='#{params[:sweetness]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/apples/#{params[:id]}")
end


#DESTROY - deletes given butterlfy from the db
get '/apples/:id/delete' do
  query_db "DELETE FROM apples WHERE id=#{params[:id]}"
  redirect to ("/apples")
end

#Function to query db
def query_db (sql_statement)
  puts sql_statement # Option feature which will help for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result #implicitly returned
end















#
