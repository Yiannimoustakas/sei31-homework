require 'pry'

@trainSystem = {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def tripCount s1, s2, l
  i1 = @trainSystem[l].find_index s1
  i2 = @trainSystem[l].find_index s2
  if i1 < i2
    stopsToMake = @trainSystem[l].slice(i1..i2)
    return stopsToMake
  else
    stopsToMake = @trainSystem[l].slice(i2..i1).reverse
    return stopsToMake
  end
end

def planTrip l1, s1, l2, s2
  if l1 == l2
    stops = tripCount s1, s2, l1
    puts "You must travel through the following stops along the #{ l1 } line: #{ stops }"
    puts "#{ stops.length } stops in total."
  else
    stops1 = tripCount s1, "Union Square", l1
    stops2 = tripCount "Union Square", s2, l2

    puts "You must travel through the following stops along the #{ l1 } line: #{ stops1 }"
    puts "Change at Union Square."
    puts "Your journey continues along the #{ l2 } line: #{ stops2 }"
    puts "#{ (stops1 + stops2).length } stops in total."
  end
end

binding.pry

planTrip('N', 'Times Square', 'N', 'Union Square');
planTrip('6', '23rd', '6', '33rd');
planTrip('L', '3rd', 'L', '3rd');
planTrip('L', '8th', 'N', '34th');
planTrip('N', '28th', '6', '33rd');
