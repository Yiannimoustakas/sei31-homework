require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:title]

  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get url

  @items = @info["items"]

  @title = @info["items"][0]["volumeInfo"]["title"]
  @book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :result

 end