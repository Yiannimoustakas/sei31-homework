require 'sinatra'
require 'sinatra/reloader'

require 'httparty'


get '/' do
    @question = "Do you have a test for that?"
    @answer = "<li><a class=\"yes btn-large btn-success\" href=\"/pass\">Yes</a><a class=\"no btn-large btn-danger\" href=\"/write_test\">No</a></li>"
    erb :template
end

get '/refactor' do    
    @question = "Need to refactor?"
    @answer ="<li><a class=\"yes btn-large btn-success\" href=\"/do_refactor\">Yes</a><a class=\"no btn-large btn-danger\" href=\"/new_feature\">No</a></li>"
    erb :template
end

get '/do_refactor' do    
    @question = "Refactor the code."
    @answer = "<li><a class=\"done btn-large btn-primary\" href=\"/pass\">Done</a></li>"
    erb :template
end

get '/pass' do   
    @question = "Does the test pass?"
    @answer = "<li><a class=\"yes btn-large btn-success\" href=\"/refactor\">Yes</a><a class=\"no btn-large btn-danger\" href=\"/write_code\">No</a></li>"
    erb :template
end

get '/write_code' do    
    @question = "Write just enough code for the test to pass."
    @answer = "<li><a class=\"done btn-large btn-primary\" href=\"/pass\">Done</a></li>"
    erb :template
end

get '/new_feature' do
    @question = "Select a new feature to implement."
    @answer = "<li><a class=\"done btn-large btn-primary\" href=\"/\">Continue</a></li>"
    erb :template
end

get '/write_test' do
    @question = "Write a test."
    @answer = "<li><a class=\"done btn-large btn-primary\" href=\"/pass\">Done</a></li>"
    erb :template
end

