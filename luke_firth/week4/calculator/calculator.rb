require 'pry'
require 'rainbow'

#binding.pry
def show_menu
  puts "Calculator" #TODO: you could .center here to make it look nice
  puts "-=-" * 40 #EL cheapo divider horizontal line
  puts "[a] - Addition"         #all this does is displays a visual menu
  puts "[m] - Multiply"
  puts "[s] - Subtract"
  puts "[d] - Divide"
  puts "[q] - Quit"
end
show_menu

menu_choice = gets.chomp.downcase #downcase assures the input is in the correct format

until menu_choice == 'q'   #loops untiil the condition is met

  #gets inputs
  puts "Enter first number "
  num1 = gets.to_f
  puts "Enter second number"
  num2 = gets.to_f


  case menu_choice
  when 'a'
  puts "#{num1} + #{num2} = #{num1 + num1}"
  when 'm'
  puts "#{num1} x #{num2} = #{num1 * num1}"
  when 's'
  puts "#{num1} - #{num2} = #{num1 - num2}"
  when 'd'
  puts "#{num1} / #{num2} is #{num1 / num1}"
  else
    puts "invalid"
end


show_menu
menu_choice = gets.chomp.downcase
end






#Explanation
#You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#Specification:
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be able to enter numbers to perform the operation on
#A user should be shown the result
#This process should continue until the user selects a quit option from the menu
#Phase 1
#Calculator functionality
#Calculator should be able to do basic arithmetic (+,-, *, /)
#Phase 2
#Advanced Calculator functionality
#Calculator should be able to do basic arithmetic (exponents, square roots)
#Bonus
#Mortgage Calculator
#Calculate the monthly required payment given the other variables as input (look up the necessary variables)

#BMI Calculator
#Calculate the body mass index (BMI) for an individual, given their height and weight

#Trip Calculator
#Calculate a trip time and cost given inputs for

#distance
#miles per gallon
#price per gallon
#speed in miles per hour
