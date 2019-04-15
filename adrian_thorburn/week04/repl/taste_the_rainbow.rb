require 'rainbow'

def handle_input(input)
  colors = Range.new(0,7).to_a
  result = eval(input)
  puts (" => #{result}").chars.map { |char| Rainbow(char).color(colors.sample) }.join
end

repl = -> prompt do
  print prompt
  handle_input(gets.chomp!)
end

loop do
  repl[">> "]
end
