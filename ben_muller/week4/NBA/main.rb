require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
 @players = query_db "SELECT image, id FROM players LIMIT 5"
 erb :home
end


#INDEX - shows all of the players
get '/players' do
  @players = query_db "SELECT * FROM players"
  erb :players_index
end

# NEW - makes a new player form for entry
get '/players/new' do
  erb :players_new
end

# CREATE a new player in the DB
post '/' do
  query = "INSERT INTO players (first_name,last_name,nickname,team,ppg,rpg,apg,games,image) VALUES ('#{params[:first_name]}','#{params[:last_name]}','#{params[:nickname]}','#{params[:team]}','#{params[:ppg]}','#{params[:rpg]}','#{params[:apg]}','#{params[:games]}','#{params[:image]}');"
  query_db query
  redirect to('/players')
end

# SHOW - View a players full details 
get '/players/:id' do
  id = params[:id]
  players = query_db "SELECT * FROM players WHERE id=#{ id }"
  @players = players.first
  erb :players_show
end

# EDIT - Edit a players stats 
get '/players/:id/edit' do
  id = params[:id]
  players = query_db "SELECT * FROM players WHERE id=#{ id }"
  @players = players.first
  erb :players_edit
end

post '/players/:id' do
  id = params[:id]
  query = "UPDATE players SET first_name='#{params[:first_name]}',last_name='#{params[:last_name]}',nickname='#{params[:nickname]}',team='#{params[:team]}',ppg='#{params[:ppg]}',rpg='#{params[:rpg]}',apg='#{params[:apg]}',games='#{params[:games]}',image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to('/players')
end

get '/players/:id/delete' do
  query = "DELETE FROM players WHERE id=#{ params[:id] }"
  query_db query
  redirect to('/')
end



def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end