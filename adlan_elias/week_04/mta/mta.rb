require "pry"

subway = {
  :n => ["Times Square [1]", "34th [2]", "28th [3]", "23rd [4]", "Union Square [U]", "8th [5]"],
  :t6 => ["Grand Central [1]", "33rd [2]", "28th [3]", "23rd [4]", "Union Square [U]", "Astor Place [5]"],
  :l => ["8th [1]", "6th [2]", "Union Square [U]", "3rd [3]", "1st [4]"]
}
get_on = ""
get_off = ""

puts "-=" * 40
puts ""
puts "RUBY MTA"
puts "  OO O o o o...        ______________________ _________________"
puts "  O     ____           |                    | |               |"
puts "  ][_n_i_| (   ooo___  |                    | |               |"
puts " (__________|_[______]_|____________________|_|_______________|"
puts " 0--0--0      0  0      0       0     0        0        0"
puts ""
puts "-=" * 40
puts ""
puts "Choose your departure train line: N, 6, L"
puts ""
puts "=-" * 40
userTrain1 = gets.chomp.upcase.to_s

# Variable userTrain1 gives station input
case userTrain1
when "N"
  userTrain1 = :n
  puts "==" * 40
  puts ""
  puts "Available stations: "
  puts "#{subway[userTrain1]*", "}"
when "6"
  userTrain1 = :t6
  puts "==" * 40
  puts ""
  puts "Available stations: "
  puts "#{subway[userTrain1]*", "}"
when "L"
  userTrain1 = :l
  puts "==" * 40
  puts ""
  puts "Available stations"
  puts "#{subway[userTrain1]*", "}"
else
  puts "==" * 40
  puts ""
  puts "Train doesn't exist fuck off"
  puts ""
  puts "....................../´¯/)"
  puts "....................,/¯../ "
  puts ".................../..../ "
  puts "............./´¯/'...'/´¯¯`·¸ "
  puts "........../'/.../..../......./¨¯\ "
  puts "........('(...´...´.... ¯~/'...') "
  puts ".........\.................'...../ "
  puts "..........''...\.......... _.·´ "
  puts "............\..............( "
  puts "..............\.............\..."
  puts ""
  puts "==" * 40
  exit
end

# Asks user for entry station
puts ""
puts "Choose your departure train station"
puts ""
puts "==" * 40
get_entry = gets.chomp.downcase.to_s

if userTrain1 == :n && get_entry == "1"
  get_on << subway[userTrain1][0]
elsif userTrain1 == :n && get_entry == "2"
  get_on << subway[userTrain1][1]
elsif userTrain1 == :n && get_entry == "3"
  get_on << subway[userTrain1][2]
elsif userTrain1 == :n && get_entry == "4"
  get_on << subway[userTrain1][3]
elsif userTrain1 == :n && get_entry == "u"
  get_on << subway[userTrain1][4]
elsif userTrain1 == :n && get_entry == "5"
  get_on << subway[userTrain1][5]
elsif userTrain1 == :t6 && get_entry == "1"
  get_on << subway[userTrain1][0]
elsif userTrain1 == :t6 && get_entry == "2"
  get_on << subway[userTrain1][1]
elsif userTrain1 == :t6 && get_entry == "3"
  get_on << subway[userTrain1][2]
elsif userTrain1 == :t6 && get_entry == "4"
  get_on << subway[userTrain1][3]
elsif userTrain1 == :t6 && get_entry == "u"
  get_on << subway[userTrain1][4]
elsif userTrain1 == :t6 && get_entry == "5"
  get_on << subway[userTrain1][5]
elsif userTrain1 == :l && get_entry == "1"
  get_on << subway[userTrain1][0]
elsif userTrain1 == :l && get_entry == "2"
  get_on << subway[userTrain1][1]
elsif userTrain1 == :l && get_entry == "u"
  get_on << subway[userTrain1][2]
elsif userTrain1 == :l && get_entry == "3"
  get_on << subway[userTrain1][3]
elsif userTrain1 == :l && get_entry == "4"
  get_on << subway[userTrain1][4]
else
  puts "==" * 40
  puts ""
  puts "  _.---,._,'"
  puts "  /' _.--.<"
  puts "  /'     `'"
  puts "  /' _.---._____"
  puts "  \.'   ___, .-'`"
  puts "  /'    \\             ."
  puts " /'       `-.          -|-"
  puts "|                       |"
  puts "|                   .-'~~~`-."
  puts "|                 .'         `."
  puts "|                 |  R  I  P  |"
  puts "|                 |           |"
  puts "|                 |           |"
  puts " \              \\|           |//"
  puts "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
  puts ""
  puts "==" * 40
  exit
end

puts "-=" * 40
puts ""
puts "Choose your arrival train line: N, 6, L"
puts ""
puts "=-" * 40
userTrain2 = gets.chomp.upcase.to_s

case userTrain2
when "N"
  userTrain2 = :n
  puts "==" * 40
  puts ""
  puts "Available stations: "
  puts "#{subway[userTrain2]*", "}"
when "6"
  userTrain2 = :t6
  puts "==" * 40
  puts ""
  puts "Available stations: "
  puts "#{subway[userTrain2]*", "}"
when "L"
  userTrain2 = :l
  puts "==" * 40
  puts ""
  puts "Available stations"
  puts "#{subway[userTrain2]*", "}"
else
  puts "==" * 40
  puts ""
  puts "Train doesn't exist fuck off"
  puts ""
  puts "....................../´¯/)"
  puts "....................,/¯../ "
  puts ".................../..../ "
  puts "............./´¯/'...'/´¯¯`·¸ "
  puts "........../'/.../..../......./¨¯\ "
  puts "........('(...´...´.... ¯~/'...') "
  puts ".........\.................'...../ "
  puts "..........''...\.......... _.·´ "
  puts "............\..............( "
  puts "..............\.............\..."
  puts ""
  puts "==" * 40
  exit
end

puts ""
puts "Choose your arrival station"
puts ""
puts "==" * 40
get_exit = gets.chomp.downcase.to_s

if userTrain2 == :n && get_exit == "1"
  get_off << subway[userTrain2][0]
elsif userTrain2 == :n && get_exit == "2"
  get_off << subway[userTrain2][1]
elsif userTrain2 == :n && get_exit == "3"
  get_off << subway[userTrain2][2]
elsif userTrain2 == :n && get_exit == "4"
  get_off << subway[userTrain2][3]
elsif userTrain2 == :n && get_exit == "u"
  get_off << subway[userTrain2][4]
elsif userTrain2 == :n && get_exit == "5"
  get_off << subway[userTrain2][5]
elsif userTrain2 == :t6 && get_exit == "1"
  get_off << subway[userTrain2][0]
elsif userTrain2 == :t6 && get_exit == "2"
  get_off << subway[userTrain2][1]
elsif userTrain2 == :t6 && get_exit == "3"
  get_off << subway[userTrain2][2]
elsif userTrain2 == :t6 && get_exit == "4"
  get_off << subway[userTrain2][3]
elsif userTrain2 == :t6 && get_exit == "u"
  get_off << subway[userTrain2][4]
elsif userTrain2 == :t6 && get_exit == "5"
  get_off << subway[userTrain2][5]
elsif userTrain2 == :l && get_exit == "1"
  get_off << subway[userTrain2][0]
elsif userTrain2 == :l && get_exit == "2"
  get_off << subway[userTrain2][1]
elsif userTrain2 == :l && get_exit == "u"
  get_off << subway[userTrain2][2]
elsif userTrain2 == :l && get_exit == "3"
  get_off << subway[userTrain2][3]
elsif userTrain2 == :l && get_exit == "4"
  get_off << subway[userTrain2][4]
else
  puts "==" * 40
  puts ""
  puts "  _.---,._,'"
  puts "  /' _.--.<"
  puts "  /'     `'"
  puts "  /' _.---._____"
  puts "  \.'   ___, .-'`"
  puts "  /'    \\             ."
  puts " /'       `-.          -|-"
  puts "|                       |"
  puts "|                   .-'~~~`-."
  puts "|                 .'         `."
  puts "|                 |  R  I  P  |"
  puts "|                 |           |"
  puts "|                 |           |"
  puts " \              \\|           |//"
  puts "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
  puts ""
  puts "==" * 40
  exit
end

if userTrain1 == userTrain2
  stop1 = subway[userTrain1].find_index(get_on)
  stop2 = subway[userTrain2].find_index(get_off)
  num_stops = (stop1 - stop2).abs
else
  stop1 = subway[userTrain1].find_index("Union Square [U]") - subway[userTrain1].find_index(get_on)
  stop2 = subway[userTrain2].find_index("Union Square [U]") - subway[userTrain2].find_index(get_off)
  num_stops = stop1.abs + stop2.abs
end

# binding.pry

puts "-=" * 40
puts ""
puts "You will travel from #{ userTrain1.upcase } at #{ get_on[0...-4] } to #{ userTrain2.upcase } at #{ get_off[0...-4] } and it will take #{ num_stops } stops"
puts ""
puts "=-" * 40
