require 'pry'
require 'rainbow'

mta = {
"n_line" => ['8th', 'Union Square', '23rd', '28th', '34th', 'Time Square'],
"l_line" => ['8th', '6th', 'Union Square', '3rd', '1st'],
"s_line" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

$sl = "l_line" #Start line global value
$ss = 3 #start station GV
$el = "n_line" #End line GV
$es = 4 # end station GV

def starting_line_menu
  puts "-=" * 40
  puts "-=" * 40
  puts "Please chose starting line" # TODO: you could .center here to make it look nice
  puts "-=" * 40 #El cheapo divider horizontal line
  puts Rainbow("[n] - N Line").red
  puts Rainbow("[l] - L Line").blue
  puts Rainbow("[6] - 6 Line").yellow
  puts "-=" * 40
end
starting_line_menu
start_line = gets.chomp.downcase

case start_line
  when 'n'
    puts "-=" * 40
    puts "Please chose starting station"
    puts "-=" * 40
    puts "[1] - 8th"
    puts "[2] - Union Square"
    puts "[3] - 23rd"
    puts "[4] - 28th"
    puts "[5] - 34th"
    puts "[6] - Time Square"
    puts "-=" * 40
  $ss = gets.to_i - 1
  when 'l'
    puts "-=" * 40
    puts "Please chose starting station"
    puts "-=" * 40
    puts "[1] - 8th"
    puts "[2] - 6th"
    puts "[3] - Union Square"
    puts "[4] - 3rd"
    puts "[5] - 1st"
    puts "-=" * 40
  $ss = gets.to_i - 1
  when '6'
    puts "-=" * 40
    puts "Please chose starting station"
    puts "-=" * 40
    puts "[1] - Grand Central"
    puts "[2] - 33rd"
    puts "[3] - 28th"
    puts "[4] - 23rd"
    puts "[5] - Union Square"
    puts "[5] - Astor Place"
    puts "-=" * 40
    $ss = gets.to_i - 1
end

if start_line == "n"
  $sl = "n_line"
elsif start_line == "l"
  $sl = "l_line"
else
  $sl = "s_line"
end

def ending_line_menu
  puts "-=" * 40
  puts "-=" * 40
  puts "Please chose end line" # TODO: you could .center here to make it look nice
  puts "-=" * 40 #El cheapo divider horizontal line
  puts Rainbow("[n] - N Line").red
  puts Rainbow("[l] - L Line").blue
  puts Rainbow("[6] - 6 Line").yellow
  puts "-=" * 40
end
ending_line_menu
end_line = gets.chomp.downcase

case end_line
  when 'n'
    puts "-=" * 40
    puts "Please chose end station"
    puts "-=" * 40
    puts "[1] - 8th"
    puts "[2] - Union Square"
    puts "[3] - 23rd"
    puts "[4] - 28th"
    puts "[5] - 34th"
    puts "[6] - Time Square"
    puts "-=" * 40
  $es = gets.to_i - 1
  when 'l'
    puts "-=" * 40
    puts "Please chose end station"
    puts "-=" * 40
    puts "[1] - 8th"
    puts "[2] - 6th"
    puts "[3] - Union Square"
    puts "[4] - 3rd"
    puts "[5] - 1st"
    puts "-=" * 40
  $es = gets.to_i - 1
  when '6'
    puts "-=" * 40
    puts "Please chose end station"
    puts "-=" * 40
    puts "[1] - Grand Central"
    puts "[2] - 33rd"
    puts "[3] - 28th"
    puts "[4] - 23rd"
    puts "[5] - Union Square"
    puts "[5] - Astor Place"
    puts "-=" * 40
    $es = gets.to_i - 1
end

if end_line == "n"
  $el = "n_line"
elsif end_line == "l"
  $el = "l_line"
else
  $el = "s_line"
end

puts Rainbow("Calculating journy from #{mta[$sl][$ss]} on #{$sl} to #{mta[$el][$es]} on #{$el}").fuchsia.bright


if $sl != $el #over all if statement to check if same line
  if $ss < mta[$sl].index("Union Square") #checks for direction, union square is the mid point, if this retuns true we travel left to right along the array
    ja = mta[$sl][$ss..mta[$sl].index("Union Square")]
  else
    ja = mta[$sl][mta[$sl].index("Union Square")..$ss].reverse #reverses journey A
  end
  # #def journey b
  if $es < mta[$el].index("Union Square") #checks for direction as above but reversed.
    jb = mta[$el][$es..mta[$el].index("Union Square")].reverse.drop(1)
  else
    jb = mta[$el][mta[$el].index("Union Square")..$es].drop(1)
  end
  journey = ja + jb #for journey length variable
else #same line starts here, skips ja/jb step
  if $ss < $es
    journey = mta[$sl][$ss..$es]
  else
    journey = mta[$sl][$es..$ss].reverse
  end
end

#output conditions, mainly for dealing with same line display issues.
if $sl == $el
  puts Rainbow("You will travel via #{journey.join', '} for a total of #{journey.size} stops").limegreen.bright
else
  puts Rainbow("You will travel via #{ja.join', '} change at Union Square and continue via #{jb.join', '} for a total of #{journey.size} stops").limegreen.bright
end
