require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:book].capitalize
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get @url
  redirect to('/') if @info['totalItems'] == 0 
  
  @main = @info["items"][0]["volumeInfo"]
  @cover_img = @main["imageLinks"]["thumbnail"]
  @book_title = @main['title']
  @published_date = @main['publishedDate']
  @description = @main['description']
  @rating = @main['averageRating']
  @rating_count = @main['ratingsCount']
  
  erb :result
end