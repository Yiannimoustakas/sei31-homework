# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all
Mountain.create(:name => "Mt Kilimanjaro", :country => "Kenya", :height => 5895, :image => 'http://kilimanjaroheight.com/wp-content/uploads/2015/12/Mt.-Kilimanjaro-e1449597817558.jpg')
