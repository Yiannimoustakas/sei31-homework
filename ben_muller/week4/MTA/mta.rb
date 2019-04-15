@mta = {
  "n" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "l" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

@stops_counter = 0
@final = true

def plan_trip line1, start, line2, stop
  if line1 == line2 
    start_index = @mta[line1].index(start)
    stop_index = @mta[line1].index(stop)
    
    if start_index < stop_index #going forward
      stops = @mta[line1][start_index..stop_index]
    else
      stops = @mta[line1].reverse
      start_index = stops.index(start)
      stop_index = stops.index(stop)
      stops = stops[start_index..stop_index]
    end
    
  puts "You must travel on the #{line1}line through the following stops: #{stops.join(', ')}"
  @stops_counter += stops.count
  
  elsif start == "Union Square"
    @final = false
    plan_trip line2, "Union Square", line2, stop
    @final = true

  elsif stop == "Union Square"
    @final = false
    plan_trip line1, start, line1, "Union Square"
    @final = true
  
  else
    @final = false
    plan_trip line1, start, line1, "Union Square"
    puts "Change at Union Square."
    plan_trip line2, "Union Square", line2, stop
    @final = true
  end
  
  puts "#{@stops_counter} Total Stops" if @final
end

plan_trip "n","Times Square","6","Union Square"
# plan_trip "6","Grand Central","l","8th"
