require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pp'

get '/' do
  erb :home
end

get '/url' do
  @searchTerms = params[:params]

  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @searchTerms }"
  info = HTTParty.get url
  items = info["items"]

  # binding.pry

  @items = items.first(5).map { |item|
    volume_info = item["volumeInfo"]
    image_links = volume_info["imageLinks"]
    {
      "title" => volume_info["title"] || "",
      "description" => volume_info["description"] || "",
      "thumbnail" => if image_links then image_links["thumbnail"] else "http://staging1.lebanesefeast.com.au/wp-content/uploads/2018/10/picture-not-available.jpg" end
    }
  }


  erb :book
end
