### BMI Calculator
# * Calculate the body mass index (BMI) for an individual, given their height and weight

# BMI Categories:
# Underweight = <18.5
# Normal weight = 18.5–24.9
# Overweight = 25–29.9
# Obesity = BMI of 30 or greater

puts "BMI Calculator"
puts "-=" * 15

def body_mass_index
  puts "Enter your weight: "
  weight = gets.to_f

  puts "Enter your height: "
  height = gets.to_f

  bmi = weight/(height**2)
  puts bmi.round(2)

  if bmi <= 18.5
    p "Underweight"
  elsif bmi > 18.5 && bmi <= 24.9
    p "Normal weight"
  elsif bmi > 25 && bmi <= 29.9
    p "Overweight"
  else bmi >= 30
    p "Obesity"
  end

end

body_mass_index()

