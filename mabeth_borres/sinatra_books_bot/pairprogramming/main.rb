require 'sinatra'
require 'sinatra/reloader'

require 'httparty'


get '/' do
    erb :home
end

get '/:click' do
    click = params[:click].to_sym
    erb click
end

=begin
get '/refactor' do    
    #@refactor_text = "<div class=\"row\"><div><p class=\"text\">Need to refactor?</p></div></div><div class=\"row\"><ul class=\"buttons\"><li><a class=\"yes btn-large btn-success\" href=\"/do_refactor\">Yes</a><a class=\"no btn-large btn-danger\" href=\"/new_feature\">No</a></li></ul></div>"
    erb :refactor
end

get '/do_refactor' do    
    erb :do_refactor
end

get '/pass' do   
    erb :pass
end

get '/write_code' do    
    erb :write_code
end

get '/new_feature' do
    erb :new_feature
end

get '/write_test' do
    erb :write_test
end
=end

=begin refactor code
    <div class="row">
    <div>
      <p class="text">
         Need to refactor?
      </p>
    </div>
  </div>
  <div class="row">
    <ul class="buttons">
      <li><a class="yes btn-large btn-success" href="/do_refactor">Yes</a>                
        <a class="no btn-large btn-danger" href="/new_feature">No</a></li>
    </ul>
  </div>
=end
