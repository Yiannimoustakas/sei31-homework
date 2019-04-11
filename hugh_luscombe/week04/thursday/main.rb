require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# INDEX of synths
get '/synths' do
  @synths = query_db 'SELECT * FROM synths'
  erb :synths_index
end

# NEW - form for adding new synths
get '/synths/new' do
  erb :synths_new
end

# CREATE - Add new butterfly to database
post '/synths' do
  query = "INSERT INTO synths (name, brand, polyphony, image) VALUES ('#{params[:name]}', '#{params[:brand]}', '#{params[:polyphony]}', '#{params[:image]}')"
  query_db query
  redirect to('/synths')
end

# SHOW - show a single synth in more detail
get '/synths/:id' do
  synths = query_db "SELECT * FROM synths WHERE id=#{params[:id]}"
  @synth = synths.first
  erb :synths_show
end

# EDIT - Show form to edit single Synthesiser
get '/synths/:id/edit' do
  synths = query_db "SELECT * FROM synths WHERE id=#{params[:id]}"
  @synth = synths.first
  erb :synths_edit
end

# UPDATE - Modify the database with new info for single synth
post '/synths/:id' do
  query = "UPDATE synths SET name='#{params[:name]}', brand='#{params[:brand]}', polyphony='#{params[:polyphony]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/synths/#{params[:id]}")
end

# DESTROY - delete synth from Database
get '/synths/:id/delete' do
  query_db "DELETE FROM synths WHERE id=#{params[:id]}"
  redirect to("/synths")
end

# Define query function
def query_db (sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end
