### Mortgage Calculator
# * Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# Here’s how we calculate your monthly mortgage payments on a fixed-rate loan:
# M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

# The variables are:
# M = monthly mortgage payment
# P = the principal, or the initial amount you borrowed.
# i = your monthly interest rate. Your lender likely lists interest rates as an annual figure, so you’ll need to divide by 12, for each month of the year. So, if your rate is 5%, then the monthly rate will look like this: 0.05/12 = 0.004167.
# n = the number of payments over the life of the loan. If you take out a 30-year fixed rate mortgage, this means: n = 30 years x 12 months per year, or 360 payments.

require 'pry'

puts "Monthly mortgage payment"
puts "--" * 15

print "Enter the initial amount you borrowed: $ "
initial_amount = gets.to_f

print "Enter the monthly interest rate: "
i = gets.to_f

print "Enter the number of payments over the life of the loan: (XX-year) "
number_years = gets.to_f

number_payments = number_years * 12
first_condition = (1+i)**number_payments

mortgage = "#{ initial_amount * ( i * first_condition ) / ( first_condition -1 ) }"

puts "Your monthly mortgage payment will be: $ #{mortgage.to_i.round(2)}"
# binding.pry