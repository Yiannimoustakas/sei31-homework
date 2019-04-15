require 'pry'


$lineN = ["Times Square" , "34th Ave", "28th Ave" , "23rd Ave", "Union Square" , "8th Ave"]
$lineL = ["8th Ave" , "6th" , "Union Square" , "3rd Ave" , "1st Ave"]
$line6 = [ "Grand Central", "33rd", "28th", "23rd"," Union Square","Astor Place"]


$start_station = "34th Ave"
$end_station = "23rd Ave"
line = $lineN

#Line Reader Backwards
def read_backwards( array )
  array.reverse.each { |x| print x}
end

#Line Reader forawrds
def read_forwards( array )
  array.each { |x| print x}
end

# Need to find the index of the station
def line_reader_single(line)
  x = line.index($start_station)
  y = line.index($end_station)

  if x < y
    print line.slice( x , y )
  elsif x > y
    print line.slice( y , x )
  else
    print "You are already there"
  end
end


binding.pry

# Need to slice that section out and put it into a new variable

# Need to list the range backwards from 8th Ave to Times square
