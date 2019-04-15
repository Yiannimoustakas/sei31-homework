require ('rainbow')

colors = Range.new(0,7).to_a
print "whoop dee doop".chars.map { |char| Rainbow(char).color(colors.sample) }.join
