require 'rainbow'

# binding.pry

randcolors = [ "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "aqua", 
"aquamarine", "mediumaquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", 
"darkblue", 
"lightblue", "mediumblue", "aliceblue", "cadetblue", "dodgerblue", "midnightblue", "navyblue", 
"powderblue", 
"royalblue", "skyblue", "deepskyblue", "lightskyblue", "slateblue", "darkslateblue", 
"mediumslateblue", 
"steelblue", "lightsteelblue", "brown", "rosybrown", "saddlebrown", "sandybrown", "burlywood", 
"chartreuse", 
"chocolate", "coral", "lightcoral", "cornflower", "cornsilk", "crimson", "cyan", "darkcyan", 
"lightcyan" ]

def show_menu
  #puts Rainbow("this is red").red + " and " + Rainbow("this on yellow bg").bg(:yellow) + " and " + Rainbow("even bright underlined!").underline.bright
  puts "\n\n"
  #puts Rainbow("-=" * 40).bg(:pink) #divider
  puts Rainbow("-=" * 40).bg(:pink) #divider
  puts Rainbow("Calculator").bg(:pink) #TODO .center to make look nice
  #puts Rainbow("-=" * 40).bg(:pink) #divider
  puts Rainbow("-=" * 40).bg(:pink) #divider
  puts Rainbow("[a] - Addition").bg(:lightblue)
  puts Rainbow("[s] - Subtraction").bg(:orange)
  puts Rainbow("[m] - Multiplication").bg(:lightgreen)
  puts Rainbow("[d] - Division").bg(:mediumaquamarine)
  puts Rainbow("[e] - Exponents").bg(:lightcoral)
  puts Rainbow("[r] - Square Roots").bg(:mediumorchid)
  puts Rainbow("[o] - Mortgage").bg(:yellowgreen)
  puts Rainbow("[b] - BMI").bg(:violet)
  puts Rainbow("[t] - Trip Calculator").bg(:sandybrown)
  # TODO add more
  puts Rainbow("[q] - Quit").bg(:lightgray)
end

def addition
  print Rainbow("Enter number: ").bg(:lightblue)
  num1 = gets.to_f
  print Rainbow("Enter number: ").bg(:lightblue)
  num2 = gets.to_f
  sum = num1 + num2
  if (sum.to_i == sum)
    sum = sum.to_i
  end
  puts Rainbow(">>Sum is #{ sum }").bg(:lightblue)
end

def subtraction
  print Rainbow("Enter number: ").bg(:orange)
  num1 = gets.to_f
  print Rainbow("Enter number: ").bg(:orange)
  num2 = gets.to_f
  diff = num1 - num2
  if (diff.to_i == diff)
    diff = diff.to_i
  end
  puts Rainbow(">>Difference is #{ diff }").bg(:orange)
end

def multiplication
  print Rainbow("Enter number: ").bg(:lightgreen)
  num1 = gets.to_f
  print Rainbow("Enter number: ").bg(:lightgreen)
  num2 = gets.to_f
  pd = num1 * num2
  if (pd.to_i == pd)
    pd = pd.to_i
  else
    pd = pd.round(2)
  end
  puts Rainbow(">>Product is #{ pd }").bg(:lightgreen)
end

def division
  print Rainbow("Enter number: ").bg(:mediumaquamarine)
  num1 = gets.to_f
  print Rainbow("Enter number: ").bg(:mediumaquamarine)
  num2 = gets.to_f
  qt = num1 / num2
  if (qt.to_i == qt)
    qt = qt.to_i
  else
    qt = qt.round(2)
  end
  puts Rainbow(">>Quotient is #{ qt }").bg(:mediumaquamarine)
end

#advanced
def exp (num1, num2)
  return num1 ** num2
end

def exponents
  print Rainbow("Enter number: ").bg(:lightcoral)
  num1 = gets.to_i
  print Rainbow("Enter value of exponent: ").bg(:lightcoral)
  num2 = gets.to_i
  ex = exp num1, num2
  puts Rainbow(">> #{num1} raised to #{num2} is #{ex}").bg(:lightcoral)
end

def sqroots
  print Rainbow("Enter number: ").bg(:mediumorchid)
  num1 = gets.to_i
  sq = Math.sqrt(num1)
  if (sq.to_i == sq)
    sq = sq.to_i
  else
    sq = sq.round(2)
  end
  puts Rainbow(">>Square root of #{num1} is #{sq}").bg(:mediumorchid)
end

def bmi
  print Rainbow("Enter weight in KGs: ").bg(:violet)
  num1 = gets.to_f
  print Rainbow("Enter height in METERs: ").bg(:violet)
  num2 = gets.to_f
  bm = num1 / (num2 * num2)
  bm = bm.round(2)
  puts Rainbow(">>BMI is #{ bm }").bg(:violet)
end

def mortgage
  print Rainbow("Enter amount of Total Loan: ").bg(:yellowgreen)
  p = gets.to_f #principal
  print Rainbow("Enter number of months of Loan Term: ").bg(:yellowgreen)
  n = gets.to_f
  print Rainbow("Enter monthly interest rate: ").bg(:yellowgreen)
  r = gets.to_f
  m = p *  ( (  r * exp( (1+r),n ) )  / ( exp( (1 + r),n ) - 1 ) )
  m = m.round(2)
  puts Rainbow(">>Monthly Payment is $#{ m }").bg(:yellowgreen)
  
  #Loan Balance
  b =  p * (  ( exp( (1 + r),n ) - exp( (1 + r),p ) ) / ( exp( (1 + r),n ) - 1 ) )
  b = b.round(2)
  #puts Rainbow(">>Loan Balance is $#{ b }").bg(:yellowgreen)
end

def tripcalc
  print Rainbow("Enter Distance in Miles: ").bg(:sandybrown)
  d = gets.to_f
  print Rainbow("Enter Miles per Gallon: ").bg(:sandybrown)
  m = gets.to_f
  print Rainbow("Enter Price per Gallon: ").bg(:sandybrown)
  p = gets.to_f
  print Rainbow("Enter Speed in Miles/Hour: ").bg(:sandybrown)
  s = gets.to_f

  tripcost = d * (1/m) * p
  tripcost = tripcost.round(2)
  puts Rainbow(">>Trip Cost is $#{ tripcost }").bg(:sandybrown)
  
  triptimeMinutes = d * (1/s) * 60
  triptimeMinutes = triptimeMinutes.to_i
  puts Rainbow(">>Trip Time is #{ triptimeMinutes } minutes").bg(:sandybrown)
end

ranin = rand randcolors.length
colorran = randcolors[ranin]
#print Rainbow("#{ranin} is #{colorran}").bg(:colorran)
#print randcolors[ranin]

show_menu
menu_choice = gets.chomp.downcase[0]

until menu_choice == 'q'
  case menu_choice
  when 'a'
    addition()
  when 's'
    subtraction()
  when 'd'
    division()
  when 'm'
    multiplication()
  when 'e'
    exponents()
  when 'r'
    sqroots()
  when 'b'
    bmi()
  when 'o'
    mortgage()
  when 't'
    tripcalc()
  else
    puts Rainbow("Invalid selection.").red.bright.bold
  end

  show_menu
  menu_choice = gets.chomp.downcase[0]
end

puts Rainbow("Thanks for using crappy calculator").hotpink.bright.bold