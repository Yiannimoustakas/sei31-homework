require "pry"

$mta_network = {
	:"N" => [ "8th", "Union Station", "23rd", "28th", "34th", "Times Square" ],
	:"L" => [ "1st", "3rd", "Union Station", "6th", "8th" ],
	:"6" => [ "Astor Place", "Union Station", "23rd", "28th", "33rd", "Grand Central" ],
}


# work it on a single line
# method that takes line you get on and the station and the line and the station you get off

def traverse_mta(board_line, board_station, alight_line, alight_station)

	board_line = board_line.upcase.to_sym
	alight_line = alight_line.upcase.to_sym

	# binding.pry
	board_index = $mta_network[board_line].index(board_station)
	alight_index = $mta_network[alight_line].index(alight_station)

	traverse_array = $mta_network[board_line][board_index..alight_index]

	puts "You're staying on the #{board_line} line. You've got #{traverse_array.length} stops in total. You'll traverse through #{traverse_array.join(", ")}."

end

traverse_mta "N", "8th", "N", "28th"
