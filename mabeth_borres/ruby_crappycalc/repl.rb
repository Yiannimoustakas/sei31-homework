require 'rainbow'

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

=begin
firebrick, fuchsia, gainsboro, gold, goldenrod, darkgoldenrod, lightgoldenrod, palegoldenrod, 
gray, darkgray, dimgray, lightgray, slategray, lightslategray, webgray, green, darkgreen, 
lightgreen, palegreen, darkolivegreen, yellowgreen, forestgreen, lawngreen, limegreen, 
seagreen, darkseagreen, lightseagreen, mediumseagreen, springgreen, mediumspringgreen, 
webgreen, honeydew, indianred, indigo, ivory, khaki, darkkhaki, lavender, lavenderblush, 
lemonchiffon, lime, linen, magenta, darkmagenta, maroon, webmaroon, mintcream, mistyrose, 
moccasin, oldlace, olive, olivedrab, orange, darkorange, orchid, darkorchid, mediumorchid, 
papayawhip, peachpuff, peru, pink, deeppink, lightpink, hotpink, plum, purple, mediumpurple, 
rebeccapurple, webpurple, red, darkred, orangered, mediumvioletred, palevioletred, salmon, 
darksalmon, lightsalmon, seashell, sienna, silver, darkslategray, snow, tan, teal, thistle, 
tomato, turquoise, darkturquoise, mediumturquoise, paleturquoise, violet, darkviolet, blueviolet, 
wheat, white, antiquewhite, 
floralwhite, ghostwhite, navajowhite, whitesmoke, yellow, lightyellow, greenyellow]
=end

ranind = rand randcolors.length 
puts ranind

puts Rainbow("Welcome to Ruby REPL").bg(:randcolors[ranind])
puts Rainbow("-=" * 40).bg(:orange) 

# Handle the input, this would probably run some method
# as a part of the DSL you'd have to create. Place this
# repl as your command line interface to your service.
def handle_input(input)
  result = Rainbow(eval(input)).bg(:orange)
  puts Rainbow((" => #{result}")).bg(:orange)
end

# This is a lambda that runs the content of the block
# after the input is chomped.
repl = -> prompt do
  print Rainbow(prompt).bg(:orange)
  Rainbow(handle_input(gets.chomp!)).bg(:orange)
end

# After evaling and returning, fire up the prompt lambda
# again, this loops after every input and exits with
# exit or a HUP.
loop do
  Rainbow(repl[">> "]).bg(:orange)
end