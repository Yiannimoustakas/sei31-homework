class Calculator
  def initialize question
    @question = question
    matches
  end

  def matches
    @matches = @question.match(/(-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)/)
    @matches
  end

  def first_number
    @matches[1].to_i
  end

  def operation
    case @matches[2]
      when "plus" then :+
      when "minus" then :-
      when "divided by" then :/
      when "multiplied by" then :*
    end
  end

  def second_number
    @matches[3].to_i
  end

  def answer
    # @answer = first_number.send(operation, second_number)
    @answer = eval("#{@matches[1]} #{operation} #{@matches[3]}")
  end

end

c = Calculator.new("What is 10 divided by 2")
d = Calculator.new("Siri what is -10 multiplied by -162")

# puts c.first_number
# puts c.operation
# puts c.second_number
puts c.answer
puts d.answer
