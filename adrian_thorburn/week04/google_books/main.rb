require 'stock_quote'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/book_summary' do
@title = params[:title] # IRL: params[:title]
url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
@info = HTTParty.get url
@book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
@author = @info["items"][0]["volumeInfo"]["authors"].join
@description = @info["items"][0]["volumeInfo"]["description"]

erb :book_summary

end


# 1: require 'httparty'
# 2: @title = "Jaws" # IRL: params[:title]
# 3: url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
# 4: @info = HTTParty.get url <-- this is the important step.
# 5: history
# 6: @info["items"][0].keys
# 7: @info["items"][0]["volumeInfo"]
# 8: @info["items"][0]["volumeInfo"]["imageLinks"]
# 9: @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

# pry(main)> @book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
# => "http://books.google.com/books/content?id=Xo5xSQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"


# juicey stuff is in "volumeInfo" -< @info["items"][0]["volumeInfo"]
# Title, Author, Description, etc etc.
