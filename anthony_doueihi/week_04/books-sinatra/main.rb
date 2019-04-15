require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/book' do
  @title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get url
  @book_cover = @info['items'][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @book_title = @info['items'][0]["volumeInfo"]["title"]
  @book_authors = @info['items'][0]["volumeInfo"]["authors"]
  @book_description = @info['items'][0]["volumeInfo"]["description"]

  erb :info
end
