require 'pry'
require 'rainbow'

# binding.pry

def show_menu
  puts "-=" * 15
  puts Rainbow("CALCULATOR").blue.underline #TODO: you could .center here to make it look nice
  puts "--" * 15 # El cheapo divider horinzotal line
  puts Rainbow("[a] - Addition").bg(:blue)
  puts Rainbow("[s] - Subtraction").bg(:blue)
  puts Rainbow("[m] - Multiplication").bg(:blue)
  puts Rainbow("[d] - Division").bg(:blue)
  puts Rainbow("[e] - Exponentiation").bg(:blue)
  puts Rainbow("[sr] - Square_roots").bg(:blue)
  puts Rainbow("[q] - Quit").bg(:red)
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  puts "Enter the number: "
  a = gets.to_f
  puts "Enter the number: "
  b = gets.to_f
  puts "-•" *15

  case menu_choice
  when 'a'
    p "#{a} + #{b} = #{a+b}"
  when 's'
    p "#{a} - #{b} = #{a-b}"
  when 'm'
    p "#{a} * #{b} = #{a*b}"
  when 'd'
    p "#{a} / #{b} = #{a/b}"
  when 'e'
    p "#{a} ** #{b} = #{a**b}"
  when 'sr'
    p "#{Integer.sqrt(a)}"
  else
    puts "Invalid selection!"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts 'Thanks for using crappy calculator!'