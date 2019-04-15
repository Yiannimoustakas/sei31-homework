# # Version 1
#
# def count_nucleotides(input)
#   dna = []
#
#   bases = {
#     "A" => 0,
#     "C" => 0,
#     "T" => 0,
#     "G" => 0
#   }
#
#   input.upcase.chars.each do |letter|
#     # puts "Checking for letter: #{letter}"
#
#     is_nucleotides = false
#
#     bases.each do |key, value|
#       # puts "the key:#{key} and the value #{value}"
#
#       if letter == key
#         bases[key] += 1
#         is_nucleotides = true
#       end
#     end #bases.each
#
#     if is_nucleotides == false
#       dna.push "#{letter} is not a nucleotide"
#     end
#
#   end #input.chars
#
#   bases.each do |key, value|
#     dna.push "#{ key }, #{ value }"
#   end
#
#   puts dna.uniq
#   # puts bases
# end
#
#
# count_nucleotides("QWEYUUUUUAGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")


# Version 2

def count_nucleotides(input)
    bases = {
      "Unknown" => 0,
      "A" => 0,
      "C" => 0,
      "T" => 0,
      "G" => 0
    }

    dna = []

    input.upcase.chars.each do |letter|

      if bases.key? letter
        bases[letter] += 1
      else
        bases["Unknown"] += 1
        dna.push "#{letter} is not a nucleotide"
      end
    end #input.chars
    
    bases.each do |key, value|
      dna.push "#{key}, #{value}"
    end

    # puts bases

    puts dna.uniq

end



count_nucleotides("QWEYUUUUUAGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")
