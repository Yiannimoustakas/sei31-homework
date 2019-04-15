require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'


# Rails will do all this for you automagically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Car < ActiveRecord::Base 
  belongs_to :dealership, :optional => true
end

class Dealership < ActiveRecord::Base
  has_many :cars
end


##### dealerships
# SHOW
get '/' do
  erb :home
end

# INDEX (LIST OF ALL CARS)
get '/cars' do
  @cars = Car.all 
  @dealerships = Dealership.all
  erb :cars_index
end

# NEW CAR 
get '/cars/new' do
  @dealerships = Dealership.all
  erb :cars_new
end

# NEW CAR POST
post '/cars' do
  car = Car.new 
  car.model = params[:model]
  car.year = params[:year]
  car.image = params[:image]
  car.dealership_id = params[:dealership_id]
  car.save
  
  redirect to("/cars/#{ car.id }")
end

# SHOW 
get '/cars/:id' do
  @car = Car.find params[:id] ##finds the car where id = params[:id]
  @dealership = Dealership.find @car.dealership_id
  erb :cars_show
end

# EDIT CAR 
get '/cars/:id/edit' do
  @car = Car.find params[:id]
  @dealerships = Dealership.all
  erb :cars_edit
end

# EDIT CAR POST 
post '/cars/:id' do
  car = Car.find params[:id]
  car.model = params[:model]
  car.year = params[:year]
  car.image = params[:image]
  car.dealership_id = params[:dealership_id]
  car.save
  
  redirect to("/cars/#{ car.id }")
end

# DELETE CAR 
get '/cars/:id/delete' do
  car = Car.find params[:id]
  car.destroy 
  redirect to("/cars")
end

###### DEALERHIPS 

get '/dealerships' do
  @dealerships = Dealership.all
  erb :dealerships_index
end

# NEW 
get '/dealerships/new' do
  erb :dealerships_new
end

# CREATE 
post '/dealerships' do
  dealership = Dealership.new
  dealership.brand = params[:brand]
  dealership.logo = params[:logo]
  dealership.save
  
  redirect to("/dealerships/#{ dealership.id }")
end

# SHOW
get '/dealerships/:id' do
  @dealership = Dealership.find params[:id]
  erb :dealerships_show
end

# EDIT 
get '/dealerships/:id/edit' do
  @dealership = Dealership.find params[:id]
  erb :dealerships_edit
end

post '/dealerships/:id' do
  dealership = Dealership.find params[:id]
  dealership.brand = params[:brand]
  dealership.logo = params[:logo]
  dealership.save
  redirect to("/dealerships/#{ dealership.id }")
end

# DELETE
get '/dealerships/:id/delete' do
  dealership = Dealership.find params[:id]
  dealership.destroy
  redirect to("/dealerships")
end


after do
  ActiveRecord::Base.connection.close
end