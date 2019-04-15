require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/book' do
  @title = params[:book_name]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get url
  @bookimg = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @authors = @info["items"][0]["volumeInfo"]["authors"]
  @date = @info["items"][0]["volumeInfo"]["publishedDate"]
  @description = @info["items"][0]["volumeInfo"]["description"]
  @rating = @info["items"][0]["volumeInfo"]["averageRating"]
  @rating_count = @info["items"][0]["volumeInfo"]["ratingsCount"]

  erb :book
end
