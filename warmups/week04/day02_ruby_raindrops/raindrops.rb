# def raindrops num
#   string = ""
#
#   if num % 3 == 0
#     string += "Pling"
#   end
#   if num % 5 == 0
#     string += "Plang"
#   end
#   if num % 7 == 0
#     string += "Plong"
#   end
#
#   if string.length == 0
#     string = num.to_s
#   end
#
#   string
# end
#
# puts raindrops 28
# puts raindrops 1755
# puts raindrops 34
# puts raindrops 105


# Version 2
require 'pry'
def raindrops num
  output = ""
  output << "Pling" if num % 3 == 0
  output << "Plang" if num % 5 == 0
  output << "Plong" if num % 7 == 0
  output.empty? ? num.to_s : output
end

# puts raindrops 28
# puts raindrops 1755
# puts raindrops 34
# puts raindrops 105

binding.pry
