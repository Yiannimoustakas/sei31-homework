require 'pry'

#Menu loader
def show_menu
  puts " \n\n        ** CALCULATOR **        \n"
  puts "==" *40
  puts "[a] - Addition"
  puts "[m] - Multiply"
  puts "[s] - Subract"
  puts "[d] - Devide"
  puts "[q] - Quit"
  puts "[bmi] - BMI calculator"
  puts "==" * 40
end

#Global Variable
 $a = 0
 $b = 0

#Methods
def numbers_getter
  print "Please let me know the first number: "
  $a = gets.to_f
  print "Please enter your seccond number: "
  $b = gets.to_f
end
#Load menu
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  case menu_choice
  when 'a'
    numbers_getter
    puts "\n#{$a} + #{$b} = #{$a + $b}"
  when 'm'
    numbers_getter
    puts "\n#{$a} x #{$b} = #{$a * $b}"
  when 's'
    numbers_getter
    puts "\n#{$a} - #{$b} = #{$a - $b}"
  when 'd'
    numbers_getter
    puts "\n#{$a} / #{$b} = #{$a / $b}"
  when 'bmi'
    print "Please enter your weight in KG, followed by your height in M \n\n"
    numbers_getter
    print "\nYour BMI is #{$a/$b**2}"
  else
    puts "Invalid selection \n\n"
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "\n\n\n Thanks for using my very crappy calculator \n\n\n"
