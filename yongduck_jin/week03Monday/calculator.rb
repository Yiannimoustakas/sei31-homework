
# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. 
# Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, 

# and ultimately view the result.
# Specification:

# A user should be given a menu of operations //string print
# A user should be able to choose from the menu // case or if, receive string. 
# A user should be able to enter numbers to perform the operation on // gets.chomp_i
# A user should be shown the result // print result without return
# This process should continue until the user selects a quit option from the menu // until to be used. 
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)


require 'pry'

#binding.pry, debugging. 


def show_menu
  puts "Calculator" # TODO: you could .center here to make iti look nice 
  puts "-=" * 40 # EL cheapo divider horizontal line. 
  puts "[a] -ADDITION"
  puts "[s] -SUBTRACTION"
  puts "[m] -MULTIPLICATION"
  puts "[d] -DIVISION"
  puts "[e] -EXPONENTIATION"
  puts "[sq] -SQUAER"
  puts "[r] -ROOT"
  puts "[q] - Quit"

end 

show_menu

menu_choice = gets.chomp.downcase 

until menu_choice == 'q'
  case menu_choice  
  when 'a' # addition
    puts '-=' * 40
    print 'Please enter the first number for ADDITION :'
    first = gets.chomp().to_i

    print 'Please enter the second number to ADDITION :'
    second = gets.chomp().to_i

    puts "Result is #{first + second} "
    

  when 's' # substraction 
    puts '-=' * 40
    print 'Please enter the first number for SUBTRACTION :'
    first = gets.chomp().to_i

    print 'Please enter the second number to SUBTRACTION :'
    second = gets.chomp().to_i
    puts "Results is #{first - second}"


  when 'm' # multiplication 
    puts '-=' * 40
    print 'Please enter the first number for MULTIPLICATION :'
    first = gets.chomp().to_i

    print 'Please enter the second number to MULTIPLICATION :'
    second = gets.chomp().to_i
    puts "Results is #{first * second}"

  when 'd' # divisino 
    puts '-=' * 40
    print 'Please enter the first number for DIVISION :'
    first = gets.chomp().to_i

    print 'Please enter the second number to DIVISION :'
    second = gets.chomp().to_i
    puts "Results is #{first / second}"

  when 'e' # exponents 
    puts '-=' * 40
    print 'Please enter the first number for EXPONENTIATION :'
    first = gets.chomp().to_i

    print 'Please enter the second number to EXPONENTIATION :'
    second = gets.chomp().to_i
    puts "Results is #{first ** second}"

  when 'sq' # square 
    puts '-=' * 40
    print 'Please enter the first number for SQUAER :'
    first = gets.chomp().to_i

    print 'Please enter the second number to SQUAER :'
    second = gets.chomp().to_i
    puts "Results is #{first * second} m2"

  when 'r' # roots 
    puts '-=' * 40
    print 'Please enter number for ROOTS :'
    first = gets.chomp().to_i

    puts "Results is #{Math.sqrt(first)}"

    # Calculator should be able to do basic arithmetic (exponents, square roots)
  else 
    puts "Invalid selection. You idiot."

  end 

  show_menu
  menu_choice = gets.chomp.downcase

end

puts "thanks for using crappy calculator!"