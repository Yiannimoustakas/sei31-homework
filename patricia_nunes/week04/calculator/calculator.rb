require 'pry'

#binding.pry

def show_menu
  title = "calculator"
  title = title.center(80)
  puts "#{title}" 
  puts "-=" *40 # el cheapo divider horizontal line
  puts "[a] - addition"
  puts "[s] - subtraction"
  puts "[m] - multiplication"
  puts "[d] - division"
  puts "[e] - exponents"
  puts "[r] - square roots"
  puts "[c] - mortage calculator"
  #TODO: add other options here
  puts "[q] - quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
  when "a"
    #todo get number a
    print "What is the first number? "
    x = gets.to_i
    #todo get number b
    print "What is the second number? "
    y = gets.to_i 
    #todo add a, b
    addition = x + y 
    puts "result of the addition is #{addition}"

  when "s"
    print "What is the first number? "
    x = gets.to_i

    print "What is the second number? "
    y = gets.to_i

    subtraction = x - y 

    puts "The result of the subtraction is #{subtraction}"

  when "m"
    print "What is the first number? "
    x = gets.to_i

    print "What is the second number? "
    y = gets.to_i

    multiplication = x * y 

    puts "The result for the multiplication is #{multiplication}"

  when "d"
    print "What the number you want divide? "
    x = gets.to_i

    print "What the number you want divide for? "
    y = gets.to_i

    division = x / y 

    puts "The result of #{x} by #{y} is #{division}"

  when "e"
    print "What is the number that you want raise? "
    x = gets.to_i

    print "What number you want to exponent? "
    y = gets.to_i

    exponent = x ** y 

    puts "The result of #{x} exponent to #{y} is #{exponent}"

  when "r"
    print "what is the number? "
    x = gets.to_i

    square_roots = Integer.sqrt(x)

    puts "The result is #{square_roots}"

  when "c"
    print "How much you borrowed? "
    borrowed = gets.to_f

    print "How long you need to pay? "
    years = gets.to_i

    print "What is the tax(number)?"
    tax = gets.to_f
    tax = tax / 100

    tax_per_month = tax / 12 + 1
    parcels_quantity = years * 12
    tax_per_parcel = tax_per_month ** - parcels_quantity
    sub_one = 1 - tax_per_parcel
    divide_tax_by_result = (tax_per_month -1) / sub_one
    the_end = divide_tax_by_result * borrowed

    total = the_end * 180

    puts "Your monthly payment will be #{the_end}, you need to pay #{total} to the bank"
    puts "the diference between is #{total - borrowed}"

  else
    puts "Invalid selection. You idiot"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "thanks for using crappy calculator!"