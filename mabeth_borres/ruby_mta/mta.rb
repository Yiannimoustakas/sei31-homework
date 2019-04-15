# RUBY HOMEWORK by Mabeth Borres

=begin
def findLineStops (line)
    lineObj = nil
    $subway.each do |key, value|
        if key == line
            lineObj = key
            break
        end
    end
    $subway[lineObj][:stops]
end
=end

$subway = {
  "N" => {
    :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },
  "L" => {
    :stops => ["8th", "6th", "Union Square", "3rd", "1st"]
  },
  "6" => {
    :stops => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  },
}

def printStops (stopsArray, indexStart, indexEnd) 

	pArray = [];
	#handle different directions when traversing the array, it could be forward or backward
	if indexStart > indexEnd
        pArray = stopsArray[indexEnd..indexStart-1].reverse
	else 
		pArray = stopsArray[indexStart+1..indexEnd]
    end

	pArray;
end

def planTrip (startline, startpt, destline, destpt) 

    center = "Union Square"
    
    if startline == destline && startpt == destpt
		printMsg = "Pick different stations as starting and destination points.";
        p printMsg
        return
    end 

	if startpt == destpt && destpt == center 
		printMsg = "You don't need to travel, you're on the same station: " + center;
        p printMsg
        return
    end

	#====== startingpt details

    sLinestops = $subway[startline][:stops] 
    #findLineStops startline
    #p "#{startline} has the following stops: #{sLinestops.join(", ")}"
    
	sIndex = sLinestops.index(startpt) 
	
	sUSidx = sLinestops.index(center)
    
	startstops = [];
	
	#====== destination details

    dLinestops = $subway[destline][:stops] 
    #findLineStops destline

	dIndex = dLinestops.index(destpt)

	if startline == destline
		# if same line, no need to stop at Union Square
		# one function call only
		startstops = printStops sLinestops, sIndex, dIndex
		
		p "You must travel through the following stops on the #{startline} line: #{startstops.join(", ")}."
        p "Total of #{ startstops.length } stop#{(startstops.length>1 ? "s" : "")} "
		
	else 
        #p "#{destline} has the following stops: #{dLinestops.join(", ")}"
        
		dUSidx = dLinestops.index(center)

        startstops = printStops sLinestops, sIndex, sUSidx
        
		deststops = printStops dLinestops, dUSidx, dIndex
		
		stopCount = startstops.length + deststops.length

		if startstops.length > 0 
			p "You must travel through the following stops on the #{startline} line: #{startstops.join(", ")}."
        end
		
		hopon = "Hop on the #{destline} line."
		
		if destpt != center 
			p "Change at Union Square. #{deststops.length>0 ? hopon : ""}"
        end
		
		if deststops.length > 0 
			p "Your journey continues through the following stops: #{deststops.join(", ")}."
        end
		
		p "Total of #{ stopCount } stop#{(stopCount>1 ? "s" : "")} "
        
    end

end

print "\n\n"
p "planTrip 'N', 'Times Square', 'N', '8th'"
planTrip 'N', 'Times Square', 'N', '8th'

print "\n\n"
p "planTrip 'N', 'Times Square', '6', '33rd'"
planTrip 'N', 'Times Square', '6', '33rd'

print "\n\n"
p "planTrip 'L', 'Union Square', 'N', 'Union Square'"
planTrip 'L', 'Union Square', 'N', 'Union Square'

print "\n\n"
p "planTrip '6', 'Union Square', 'N', '8th'"
planTrip '6', 'Union Square', 'N', '8th'

