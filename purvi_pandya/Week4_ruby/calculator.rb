require 'pry'
require 'rainbow'
#binding.pry whenever you want

def show_menu

  puts "CALCULATOR"# TODO: you could .center here to make it look nice
  puts "-="*40 # EL cheapo divider horizontal line
  puts "[a]-addition"
  puts "[s]-substraction"
  puts "[m]-multiplication"
  puts "[d]-division"
  puts "[sq]-squareroot"
  puts "[exp]-exponents"
  puts "[bmi]-body mass index"
  puts "[loan]-loan per month"
  #todo: add other options here
  puts "[q]-quit"
end
#  number = 10.times do |number|
#  puts "the number is #{number}"
# end

def add
  print "select a number : "
  x = gets.to_i
  print "select a number : "
  y = gets.to_i
  return x+y
end

def sub
  print "select a number : "
  x = gets.to_i
  print "select a number : "
  y = gets.to_i
  return x-y
end

def multi
  print "select a number : "
  x = gets.to_i
  print "select a number : "
  y = gets.to_i
  return x*y
end

def divide
  print "select a number : "
  x = gets.to_i
  print "select a number : "
  y = gets.to_i
  return x/y
end

def sqrt
  print "select a number : "
  x = gets.to_i
  return Math.sqrt(x)
end

def exponents
  print "select a number : "
  x = gets.to_i
  return Math.exp(x)
end

def bmi
  print "enter your height in meters : "
  height = gets.to_i
  print "enter your body weight in kgs : "
  weight = gets.to_i
  bmi = weight/(height * height)
  if bmi < 18.5
puts "underweight"
elsif bmi >= 18.5 && bmi < 25.0
puts "normal"
elsif bmi >= 25.0 && bmi < 30.0
puts "overweight"
else
puts "obese"
end
  return bmi
end

def loan
  print "enter the amont of loan : "
  loan = gets.chomp.to_i
  print "enter the duration of loan in months : "
  loan = gets.chomp.to_i
  print "enter the interest rate : "
  rate = gets.chomp.to_i
  i = (1+rate/12)**(12/12)-1
annuity = (1-(1/(1+i))**time)/i

  return payment = loan/annuity
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "addition is #{add()}"

  when 's'

  puts "substraction is #{sub()}"

    when 'm'

  puts "multiplication is #{multi()}"

      when 'd'

          puts "division is #{divide()}"

        when 'sq'
          puts "squareroot is #{sqrt()}"

        when 'exp'
          puts "exponents is #{exponents()}"

        when 'bmi'
          puts "BMI is #{bmi()}"
        when 'loan'
          puts "monthly required payment is #{loan()}"
          # "\n$%.2f per month" % [payment]


  else
    puts "Invalid selection. you idiot"
  end
  show_menu
  menu_choice = gets.chomp.downcase

end

puts "Thanks for using the crappy calculator."
