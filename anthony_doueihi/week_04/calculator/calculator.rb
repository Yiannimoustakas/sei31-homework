# Calculator should be able to do basic arithmetic (+,-, *, /)
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
# Calculate the body mass index (BMI) for an individual, given their height and weight
# Calculate a trip time and cost given inputs for
# distance,  miles per gallon, price per gallon, speed in miles per hour

require 'pry'
require 'Rainbow'

#binding.pry

def show_menu
  puts "Calculator" #TODO: you could use .center to make pretty
  puts "-=" * 40 #El chepo divider
  puts "[a] - Addition"
  puts "[s] - Subtract"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponent"
  puts "[sr] - Square Roots"
  puts "[cr] - Cube Roots"
  puts "[mort] - Mortgage"
  puts "[bmi] - Body Mass Index"
  puts "[tt] - Trip Time"
  puts "[q] - Quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    print "First Number to Add: "
    a = gets.to_f

    print "Second Number to Add: "
    b = gets.to_f

    puts "#{ Rainbow(a).yellow } + #{ Rainbow(b).yellow } = #{ Rainbow(a + b).magenta }"

  when 's'
    print "Number to Subtract From: "
    a = gets.to_f

    print "Number to Subtract By: "
    b = gets.to_f

    puts "#{ Rainbow(a).yellow } - #{ Rainbow(b).yellow } = #{ Rainbow(a - b).magenta }"

  when 'm'
    print "First Number to Multiply: "
    a = gets.to_f

    print "Second Number to Multiply: "
    b = gets.to_f

    puts "#{ Rainbow(a).yellow } x #{ Rainbow(b).yellow } = #{ Rainbow(a * b).magenta }"

  when 'd'
    print "Number to Divide From: "
    a = gets.to_f

    print "Number to Divide By: "
    b = gets.to_f

    puts "#{ Rainbow(a).yellow } / #{ Rainbow(b).yellow } = #{ Rainbow(a / b).magenta }"

  when 'e'
    print "Number: "
    a = gets.to_f

    print "Exponent: "
    b = gets.to_f

    puts "#{ Rainbow(a).yellow } to the power of #{ Rainbow(b).yellow } = #{ Rainbow(a ** b).magenta }"

  when 'sr'
    print "Number to Squre Root: "
    a = gets.to_f

    puts "The square root of #{ Rainbow(a).yellow } is #{ Rainbow(Math.sqrt(a)).magenta }"

  when 'cr'
    print "Number to Cube Root: "
    a = gets.to_f

    puts "The square root of #{ Rainbow(a).yellow } is #{ Rainbow(Math.cbrt(a)).magenta }"

  when 'mort'
    print "What is the Loan Amout: "
    loan_amount = gets.to_f

    print "What is the Interest Rate in Percentage: "
    interest_rate = gets.to_f / 100

    print "What is the Loan Term in Years: "
    term = gets.to_i * 12

    monthly = ( interest_rate  / ( 1 - ( 1 + interest_rate ) ** ( -term ) ) )  * loan_amount;
binding.pry

    puts "A monthly payment of $#{ Rainbow(monthly.round 2).magenta } is required."

  when 'bmi'
    print "What is your weight in kg: "
    weight = gets.to_f

    print "What is your height in cm: "
    height = gets.to_f

    bmi = (weight / height / height) * 10000;
    puts "Your body mass index is #{ Rainbow(bmi.round 2).magenta  }"


    if bmi < 18.5
      puts Rainbow("That means you are underweight.").aqua
    elsif bmi < 25
      puts Rainbow("That means you have a healthy weight").aqua
    elsif bmi < 30
      puts Rainbow("That means you are overweight").aqua
    else
      puts Rainbow("That means you are obese").aqua
    end

  when 'tt'
    # distance,  miles per gallon, price per gallon, speed in miles per hour
    print "Distance to Travel in km: "
    distance = gets.to_f

    print "Kilometres per liter of fuel: "
    efficiency = gets.to_f

    print "Cost per liter of fuel: "
    cost = gets.to_f

    print "Speed in km/h: "
    speed = gets.to_f

    puts "This trip will take #{ Rainbow(distance / speed).magenta } hours and cost $#{ Rainbow(cost * (distance / efficiency)).magenta }."

  else
    puts "Invalid selection"
  end
    gets
    show_menu
    menu_choice = gets.chomp.downcase
end


puts "Thanks for using the crappy calculator"
