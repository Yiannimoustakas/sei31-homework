require 'pry'

# binding.pry

def show_menu
  puts "Best Calculator to ever exist" #TODO: You could use .center here to make it look nice
  puts "-=" * 40 #El cheapo divider horizontal line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponents"
  puts "[r] - Square roots"
  puts "[k] - Mortgage Calculator"
  puts "[b] - BMI Calculator"
  puts "[t] - Trip Calculator"
  # Add other options here
  puts "[q] - Quit"
  puts "-=" * 40
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  if 'a'
    puts "Which numbers would you like to add?"
    a = gets.to_i
    b = gets.to_i
    result = a + b
    puts "#{ a } + #{ b } equals #{ result }"
    puts "-=" * 40
  if 's'
    puts "Which numbers would you like to subtract?"
    a = gets.to_i
    b = gets.to_i
    result = a - b
    puts "#{ a } - #{ b } equals #{ result }"
    puts "-=" * 40
  if 'm'
    puts "Which numbers would you like to multiply?"
    a = gets.to_i
    b = gets.to_i
    result = a * b
    puts "#{ a } * #{ b } equals #{ result }"
    puts "-=" * 40
  if 'd'
    puts "Which numbers would you like to divide?"
    a = gets.to_i
    b = gets.to_f
    result = a / b
    puts "#{ a } / #{ b } equals #{ result.to_f }"
    puts "-=" * 40
  if 'e'
    puts "Which numbers would you like the exponents of?"
    a = gets.to_i
    b = gets.to_f
    result = a ** b
    puts "#{ a } to the power of #{ b } equals #{ result.to_f }"
    puts "-=" * 40
  if 'r'
    puts "Which numbers would you like to square root?"
    a = gets.to_i
    result = Math.sqrt(a)
    puts "Square root of #{ a } equals #{ result.round(2) }"
    puts "-=" * 40
  if 'k'
    puts "Please enter the relevant information"
    puts "What is your principal?"
    p = gets.to_f
    puts "What is your interest rate?"
    i = gets.to_f
    i_calc = (i / 100) / 12
    puts "How long do you have on your loan?"
    n = gets.to_f
    n_calc = n * 12
    result = p * ((i_calc * ((1 + i_calc) ** n_calc )) / ((1 + i_calc) ** ( (n_calc) - 1 )))
    puts "Your Mortgage comes to $#{ result.round(2) }"
    puts "-=" * 40
  if 'b'
    puts "Please enter the relevant information"
    puts "What is your weight in kg?"
    w = gets.to_f
    puts "What is your height in inches?"
    h = gets.to_f
    h_m = h * 0.025
    h_msq = h_m ** 2
    result = w / h_msq
    puts "Your BMI is #{ result }"
    if result < 19 or result > 23
      puts "A healthy BMI is between 19-23 so do what you want with that information"
      puts "-=" * 40
    else
      puts "You are healthy!"
      puts "-=" * 40
    end
  if 't'
    puts "Please enter the relevant information"
    puts "How far are you traveling in miles?"
    d = gets.to_f
    puts "How fast are you traveling in miles?"
    s = gets.to_f
    puts "How far can you travel in miles per gallon?"
    g = gets.to_f
    puts "What is the price per gallon?"
    p = gets.to_f
    cost = (d / g) * p
    time = d / s
    puts "The total time taken will be #{time} hours and it will cost you $#{cost}"
    puts "-=" * 40
  else
    puts "Invalid selection"
    puts "-=" * 40
end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy Calculator!"
