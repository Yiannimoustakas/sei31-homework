require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get '/' do
    erb :home
end

get '/result' do
    
    @title = params[:booktitle]

    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

    @info = HTTParty.get url

    redirect to('/') if @info.nil?
    
    newTitle = @title.capitalize
    if @title.include?(" ")
        newTitle = ""
        arr = @title.split(" ")
        arr.each do |part|
            newTitle += part.capitalize + " "
        end
        newTitle = newTitle.chop
    end

    @lookup = newTitle
    firstbookfound = @info["items"][0]["volumeInfo"]
    @title = firstbookfound["title"]
    @bookcover = firstbookfound["imageLinks"]["thumbnail"]
    @authors = firstbookfound["authors"][0]
    @publishedDate = firstbookfound["publishedDate"]
    @description = firstbookfound["description"]

    erb :result
end



