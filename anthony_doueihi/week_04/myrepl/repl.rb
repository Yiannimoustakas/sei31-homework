puts "Welcome to my Ruby REPL"

print "> "
input = gets.chomp

until input == "Please let me go"
  puts eval input
  print "> "
  input = gets.chomp
end
