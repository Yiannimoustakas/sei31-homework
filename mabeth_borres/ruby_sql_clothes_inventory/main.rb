require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
    erb :home
end

#index - show all clothes
get '/clothes' do
    clothes = query_db 'SELECT * FROM clothes '
    @clothestotal = clothes.length
    @clothesitems = Hash.new
    clothestypes = query_db 'SELECT * FROM clothestypes '

    clothestypes.each do | key |
        typein = key["type"]
        results = query_db "SELECT * FROM clothes WHERE type='#{typein}'"
        @clothesitems[typein] = results
    end

    erb :clothes_index
end

#form to add a new clothing item
get '/clothes/new' do
    @clothestypes = query_db 'SELECT * FROM clothestypes '
    erb :clothes_new
end

#post
post '/clothes' do
    query = "INSERT INTO clothes (name, type, subtype, material, size, color, image) VALUES ('#{params[:name]}', '#{params[:type]}', '#{params[:subtype]}', '#{params[:material]}', '#{params[:size].to_i}', '#{params[:color]}', '#{params[:image]}')"
    query_db query
    redirect to ('/clothes')
end

get '/clothes/types' do
    @clothestypes = query_db 'SELECT * FROM clothestypes '
    erb :clothes_types
end

get '/clothes/types/:id/delete' do
    query_db "DELETE FROM clothestypes WHERE id=#{params[:id]}"
    redirect to ('/clothes/types')
end

post '/clothes/types/add' do
    query_db "INSERT INTO clothestypes (type) VALUES ('#{params[:type]}')"
    redirect to ('/clothes/types')
end

#show clothing item
get '/clothes/:id' do
    clothes = query_db "SELECT * FROM clothes WHERE id=#{params[:id]}"
    @clothitem = clothes.first
    erb :clothes_show
end

#edit a single 
get '/clothes/:id/edit' do
    clothes = query_db "SELECT * FROM clothes WHERE id=#{params[:id]}"
    @clothitem = clothes.first
    erb :clothes_edit
end

#update
post '/clothes/:id' do
    query = "UPDATE clothes SET name='#{params[:name]}', subtype='#{params[:subtype]}', material='#{params[:material]}', size='#{params[:size].to_i}', color='#{params[:color]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    query_db query
    redirect to ("/clothes/#{params[:id]}")
end

#delete a single item
#coming from a link, it's always get
get '/clothes/:id/delete' do
    query_db "DELETE FROM clothes WHERE id=#{params[:id]}"
    redirect to ('/clothes')
end

def query_db (sql_statement)
    puts sql_statement #optional
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql_statement
    db.close
    result #implicitly returned
end
