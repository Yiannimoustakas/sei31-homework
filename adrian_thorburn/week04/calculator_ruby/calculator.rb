require 'pry'
require 'rainbow'

#Global Variable
$a = 0
$b = 0

#Methods
def numbers_getter
 print "Enter first number: "
 $a = gets.to_f
 print "and seccond number: "
 $b = gets.to_f
 # print "to what decimal place: "
 # $d = gets.to_i
end

def show_menu
  puts "-=" * 40
  puts "-=" * 40
  puts "Calculator" # TODO: you could .center here to make it look nice
  puts "-=" * 40 #El cheapo divider horizontal line
  puts Rainbow("[a] - Addition").red.underline.bright
  puts Rainbow("[s] - Subtraction").blue.underline.bright
  puts Rainbow("[d] - Division").green.underline.bright
  puts Rainbow("[m] - Multiplication").yellow.underline.bright
  puts Rainbow("[r] - Square root").aqua.underline.bright
  puts Rainbow("[e] - Exponent").magenta.underline.bright
  puts Rainbow("[l] - Loan repayments").bg(:yellow).black
  puts Rainbow("[b] - Body Mass Index Calculator (BMI)").bg(:indianred).black
  puts Rainbow("[j] - Journey Calculator").bg(:white).black
  puts Rainbow("[q] - quit").bright
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    numbers_getter
    puts Rainbow("#{$a} + #{$b} = #{$a + $b}").red.underline.bright # this removes the .0 bit of a trade off with floats #{($a + $b).round($d)}
  when 's'
    numbers_getter
    puts Rainbow("#{$a} - #{$b} = #{$a - $b}").blue.underline.bright
  when 'd'
    numbers_getter
    puts Rainbow("#{$a} / #{$b} = #{$a / $b}").green.underline.bright
  when 'm'
    numbers_getter
    puts Rainbow("#{$a} * #{$b} = #{$a * $b}").yellow.underline.bright
  when 'r'
    print "enter number "
    a = gets.to_f
    c = Integer.sqrt(a).floor
    puts Rainbow("#{c}").aqua.underline.bright
  when 'e'
    numbers_getter
    puts Rainbow("#{$a} ** #{$b} = #{$a ** $b}").magenta.underline.bright
  when 'l'
    # print "Ammount borrowed "
    # a = gets.to_i
    # print "Interest rate "
    # b = gets.to_i
    # print "term of loan in months "
    # c = gets.to_i
    puts Rainbow("coming soon but loans are boring....").bg(:yellow).black
  when 'b'
    print "enter height m "
    a = gets.to_f
    hsq = a ** 2
    print "enter weight in kg "
    b = gets.to_f
    bmi = b / hsq
    puts "with a height of #{a}m and a weight of #{b}kg you ave a BMI of #{bmi.round(1)}"
    if bmi < 18.5
      puts Rainbow("EAT MORE PIES ASAP").bg(:indianred).black
    elsif bmi < 25
      puts Rainbow("your pie consumption is perfect").bg(:indianred).black
    elsif bmi < 30
      puts Rainbow("chill out on the pies bro").bg(:indianred).black
    else
      puts Rainbow("NO MORE PIES FATTY").bg(:indianred).black
    end
  when 'j'
    puts "
    # Calculate a trip time and cost given inputs for
    # distance
    # miles per gallon
    # price per gallon
    # speed in miles per hour"

  else
    puts "invalid selection"
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "thanks for using super 1337 h4x calculator"



show_menu
