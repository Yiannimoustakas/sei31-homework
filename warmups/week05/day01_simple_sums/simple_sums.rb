class SimpleSums
  # before we add any methods to this class, we want to be able to give it some initial data
  # in this case we want the classSimpleSums to know the print_numberwe add the method initialize to the class and make the method take an argument which will be our number
  def initialize number
    # At this point number is loval to the initialize metyhod, so by declaring @num, it's scope will be global to other methods withijn the SimpleSums class
    @number = number
  end

  def print_number
    @number
  end

  def s1
    @number % 2
  end

  def s2
    # calculate the addition from from 1 to n
    # (@number*(@number + 1))/2
    (1..@number).sum
  end

end

# Whenever you call the method new on a class, as in SimpleSums.new, the class will create a new instance of itself. It will then, internally, call the method initialize on the new Object. Doing so it will siply pass all the argguments that you passed to new on to the method initiailize
sum = SimpleSums.new(5)

p sum.print_number

p sum.s1

p sum.s2
