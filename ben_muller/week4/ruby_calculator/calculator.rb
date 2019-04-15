require 'pry'

def show_menu
  puts "Calculator".center(80) # TODO: you cold .center to make it look nice
  puts "-=" * 40 # divider
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sqr] - Square a number"
  puts "[root] - Square root a number" 
  puts "[mortgage] - Work out repayments per month"
  puts "[bmi] - Body Mass Index"
  puts "[q] - Quit"
end

def addition
  print "enter first number to add: "
  a = gets.to_f
  print "enter second number to add: "
  b = gets.to_f
  puts "Solution is #{a + b}"
end

def subtract
  print "enter first number to minus: "
  a = gets.to_f
  print "enter second number to minus: "
  b = gets.to_f
  puts "Solution is #{a - b}"
end

def multiply
  print "enter first number to multiply: "
  a = gets.to_f
  print "enter second number to multiply: "
  b = gets.to_f
  puts "Solution is #{a * b}"
end

def divide
  print "enter first number to divide: "
  a = gets.to_f
  print "enter second number to divide: "
  b = gets.to_f
  puts "Solution is #{ (a / b) }"
end

def square
  print "enter number to square: "
  num = gets.to_f
  puts "Solution is #{num ** 2}"

end

def squareroot
  print "enter number to find the squareroot of: "
  num = gets.to_f
  puts "Solution is #{Math.sqrt(num)}"
end

def mortgage
  print "enter amount borrowed: "
  borrowed = gets.to_f
  print "enter interest rate "
  rate = gets.to_f
  rate /= 1200
  p rate
  print "enter length of loan in years "
  length = gets.to_f
  length *= 12
  # P = L[c(1 + c)n]/[(1 + c)n - 1]
  div1 =  rate*(1 + rate)**length
  div2 =  (( 1 + rate )**length) - 1
  repayments = borrowed*( div1/div2 ) 
  
  puts "Your Repayments will be $#{repayments} per month"
end

def bmi
  print "Enter height (cms): "
  height = gets.to_f / 100
  
  print "Enter weight (kgs): "
  weight = gets.to_f
  
  bmi = weight / height ** 2
  puts "Your BMI is #{bmi}"
  
end
  

show_menu
print "Choose an option : "
menu_choice = gets.chomp.downcase
p menu_choice

until menu_choice == "q"
  case menu_choice
  when "a"
    addition
  when "s"
    subtract
  when "m"
    multiply
  when "d"
    divide
  when "sqr"
    square
  when "root"
    root 
  when "mortgage"
    mortgage
  when "bmi"
    bmi
  else  
    puts "Invalid Selection"
  end
  
  show_menu
  print "Choose an option : "
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the Calculator"