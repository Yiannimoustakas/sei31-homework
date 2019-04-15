require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end


  get '/result' do
     @bookname = params[:bookname]
     url = "https://www.googleapis.com/books/v1/volumes?q=#{@bookname}"
     @bookhash = HTTParty.get url;
     @image = @bookhash["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"]
     @image1 = @image.to_s
  end


# binding.pry
