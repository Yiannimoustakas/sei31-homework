require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Song < ActiveRecord::Base
  belongs_to :artist, :optional => false
  belongs_to :album, :optional => true
end

class Artist < ActiveRecord::Base
  has_many :songs
  has_many :albums
end

class Album < ActiveRecord::Base
  belongs_to :artist, :optional => false
  has_many :songs
end

# Homepage with all artists
get '/' do
  @artists = Artist.all
  erb :artist_index
end

# Create new artist
post '/' do
  artist = Artist.new
  artist.name = params[:name]
  artist.image_url = params[:image]
  artist.save

  redirect to '/'
end

# Go to create new artist page
get '/new' do
  erb :artist_new
end

# Delete artist
post '/:id/delete' do
  artist = Artist.find params[:id]
  artist.delete
  redirect to '/'
end

# Show specific artist
get '/:id' do
  @artist = Artist.find params[:id]
  erb :artist_show
end

# Update specific artist
post '/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.image_url = params[:image]
  artist.save

  redirect to "/#{params[:id]}"
end

# Edit specific artist form
get '/:id/edit' do
  @artist = Artist.find params[:id]

  erb :artist_edit
end

# Song Index
get '/song/:id' do
  @song = Song.find params[:id]
  erb :songs_show
end

# Create new song
post '/:id/song' do
  song = Song.new
  puts params[:id]
  song.title = params[:title]
  song.artist_id = params[:id]
  song.album_id = params[:album_id]
  song.save

  redirect to "/#{params[:id]}"
end

# Edit song
post '/song/:id' do
  song = Song.find params[:id]
  song.title = params[:title]
  song.album_id = params[:album_id]
  song.save

  redirect to "/#{song.artist_id}"

end

# New Song Form
get '/song/:id/new' do
  @artist_id = params[:id];
  erb :songs_new
end

# Delete song
post '/song/:id/delete' do
  song = Song.find params[:id]
  artist_id = song.artist_id
  song.delete
  redirect to "/#{artist_id}"
end

# Edit Song Form
get '/song/:id/edit' do
  @song = Song.find params[:id]
  erb :songs_edit
end

# Album Index
get '/album/:id' do
  @album = Album.find params[:id]
  erb :album_show
end

# Edit album
post '/album/:id' do
  album = Album.find params[:id]
  album.name = params[:name]
  album.image_url = params[:image]
  album.save

  redirect to "/#{album.artist_id}"
end

# create new Album
post '/:id/album' do
  album = Album.new
  album.name = params[:name]
  album.image_url = params[:image]
  album.artist_id = params[:id]
  album.save

  redirect to "/#{params[:id]}"
end

# New Album Form
get '/album/:id/new' do
  @artist_id = params[:id];
  erb :album_new
end

# Delete Album
post '/album/:id/delete' do
  album = Album.find params[:id]
  artist_id = album.artist_id
  album.delete
  redirect to "/#{artist_id}"
end

# Edit Album Form
get '/album/:id/edit' do
  @album = Album.find params[:id]
  erb :album_edit
end


after do
  ActiveRecord::Base.connection.close
end
