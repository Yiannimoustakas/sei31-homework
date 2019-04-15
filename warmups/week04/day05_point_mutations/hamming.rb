def hamming(string1, string2)
  distance = 0
  string1.chars.each_with_index do |letter, index|
    if letter != string2[index]
      distance += 1
    end
  end
  p distance
end

hamming("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")


Ben's Solution

def hamming(string1, string2)
  p (0...string1.size).select {|i| string1[i] != string2[i]}.length
end

hamming("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")
