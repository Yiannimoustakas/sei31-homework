require "pry"

def show_menu
	puts "\n"
	puts "-=" * 40 # El cheapo divider hotizontal line
	puts "Calculator" # TODO: you could .center here to amek it look nice
	puts "-=" * 40 # El cheapo divider hotizontal line
	puts "\n"
	puts "[a] - Addition"
	puts "[s] - Subtraction"
	puts "[m] - Multiplication"
	puts "[d] - Division"
	puts "\n"
	puts "[ex] - Exponent"
	puts "[sq] - Square Root"
	puts "\n"
	puts "[mod] - Modulus"
	puts "\n"
	puts "[mortgage] - Mortgage Calculator"
	puts "\n"
	puts "[trip] - Trip Calculator"
	puts "\n"
	puts "[q] - Quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
	case menu_choice
	when "a"
		# define the method
		def add( num1, num2 )
			num1 + num2
		end

		puts "What is the first number you want to add?"
		num1 = gets.to_f
		puts "And the second number?"
		num2 = gets.to_i

		puts "\n"
		puts "-=" * 20
		puts "Your total is #{ add num1, num2 }.\n"
		puts "-=" * 20
		puts "\n" * 3

	when "s"
		# define the method
		def subtract( num1, num2 )
			num1 - num2
		end

		puts "What is the first number you wan to subtract from?"
		num1 = gets.to_f
		puts "How much do you want to subtract from #{ num1 }?"
		num2 = gets.to_i

		puts "\n"
		puts "-=" * 20
		puts "Your total is #{ subtract num1, num2 }"
		puts "-=" * 20
		puts "\n" * 3

	when "m"
		# define the method
		def multiply( num1, num2 )
			num1 * num2
		end

		puts "What is the first number?"
		num1 = gets.to_f
		puts "And the second?"
		num2 = gets.to_i

		puts "\n"
		puts "-=" * 20
		puts "Your total is #{ multiply num1, num2 }."
		puts "-=" * 20
		puts "\n" * 3

	when "d"
		# define the method
		def multiply( num1, num2 )
			num1 / num2
		end

		puts "What is base number?"
		num1 = gets.to_f
		puts "And how much do you want to divide it by?"
		num2 = gets.to_i

		puts "\n"
		puts "-=" * 20
		puts "You total is #{ multiply num1, num2 }."
		puts "-=" * 20
		puts "\n" * 3

	when "ex"
		#define the method
		def exponent( num1, num2 )
			num1 ** num2
		end

		puts "What is your base number?"
		num1 = gets.to_f
		puts "To the power of..?"
		num2 = gets.to_i

		puts "\n"
		puts "-=" * 20
		puts "The total is #{ exponent num1, num2 }."

	when "sq"
		puts "What square root do you want?"
		num1 = gets.to_f

		puts "The square root of #{ num1 } is #{ Integer.sqrt(num1) }."

	when "mod"
		# define the method
		def modulus( num1, num2 )
			num1 % num2
		end

		puts "What is the modulo of ..."
		num1 = gets.to_i
		puts "and ..."
		num2 = gets.to_f

		puts "\n"
		puts "-=" * 20
		puts "The remainder is #{ modulus num1, num2 }."
		puts "-=" * 20

	when "mortgage"
		#define method
		# rate = % per annum
		# periods = how many years you plan on paying back the load
		def mortgage_calc( rate, years, principal )
			rate /= (12 / 100)
			years *= 12

			puts rate
			puts years

			return (principal * ( (rate*(1+rate)**years) / ((1+rate)**years - 1) )).round(2)
		end

		puts "What is the yearly rate on your loan?"
		rate = gets.to_f
		puts "Over how many years will you pay it back?"
		years = gets.to_i
		puts "What was your principal loan?"
		principal = gets.to_i

		puts "Your total repayment per month is #{ mortgage_calc rate, years, principal }."

	when "trip"

	else
		puts "Invalid selection. You idiot."
	end

	show_menu
	menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator."
