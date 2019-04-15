require 'pry'
require 'rainbow'


def show_menu
  puts "-=" * 50
  puts "Shitty Calculator".center(100)
  puts "-=" * 50
  puts ""
  puts "[a] - Addition"
  puts "[s] - Subtract"
  puts "[d] - Divide"
  puts "[m] - Multiple"
  puts "[dist] - Distance"
  puts "* " * 20
  puts "[q] - Quit "
  puts ""
  puts "*" * 50
  puts "Choice A Function & Input Your Numbers"
  puts "*" * 50
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
    when "a"
      def add
        puts Rainbow("First Number").green.bright
        a = gets.chop.to_i
        puts Rainbow("Second Number").blue.bright
        b = gets.chop.to_i
        puts Rainbow("Answer: #{a} + #{b} = #{a + b}").red.bright
      end
      add()
    when "a"
      def add
        puts Rainbow("First Number").green.bright
        a = gets.chop.to_i
        puts Rainbow("Second Number").blue.bright
        b = gets.chop.to_i
        puts Rainbow("Answer: #{a} + #{b} = #{a + b}").red.bright
      end
      add()
    when "s"
      def subtract
        puts Rainbow("First Number").green.bright
        a = gets.chop.to_i
        puts Rainbow("Second Number").blue.bright
        b = gets.chop.to_i
        puts Rainbow("Answer: #{a} - #{b} = #{a - b}").red.bright
      end
      subtract()
    when "d"
      def divide
        puts Rainbow("First Number").green.bright
        a = gets.chop.to_i
        puts Rainbow("Second Number").blue.bright
        b = gets.chop.to_i
        puts Rainbow("Answer: #{a} / #{b} = #{a / b}").red.bright
      end
      divide()
    when "m"
      def multiple
        puts Rainbow("First Number").green.bright
        a = gets.chop.to_i
        puts Rainbow("Second Number").blue.bright
        b = gets.chop.to_i
        puts Rainbow("Answer: #{a} x #{b} = #{a * b}").red.bright
      end
      multiple()
    when "dist"
      def distance
        puts Rainbow("Enter Your Speed (MPH)").green.bright
        a = gets.chop.to_i
        puts Rainbow("Enter Your Time (In Minutes)").blue.bright
        b = gets.chop.to_i / 60
        puts Rainbow("Answer: Your Will Travel #{a * b} miles").red.bright
      end
      distance()
    else
  puts "Invalid Selection"
end

show_menu
menu_choice = gets.chomp.downcase

end

puts "Thanks for using Shitty Calculator"
