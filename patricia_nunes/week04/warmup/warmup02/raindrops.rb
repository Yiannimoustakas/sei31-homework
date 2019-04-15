def raindrops num 
  string = ""

  if num % 3 == 0
    string += "Pling"
  end
  if num % 5 == 0
    string += "Plang"
  end
  if num % 7 == 0
    string += "Plong"
  end

  if string.length == 0
    string = num.to_s
  end
  string
end

puts raindrops 28
puts raindrops 1755
puts raindrops 34
puts raindrops 105
