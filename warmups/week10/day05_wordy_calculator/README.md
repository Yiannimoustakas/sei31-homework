# Wordy Calculator

Write Ruby code that takes word problems in the following formats:

> What is 5 plus 13?

> What is 7 minus 5?

> What is -6 multiplied by 4?

> What is 25 divided by -5?

and returns the answer as an integer.

You should define a Calculator class which uses the constructor function (`initialize`) to set the question, and an `answer` method to return the answer.

Use a regular expression to parse the question.

__HINT__: You will probably want to use Ruby's `match` method, and in particular a [capture group](http://code.tutsplus.com/tutorials/ruby-for-newbies-regular-expressions--net-19812) which uses parentheses in the regex, and returns a MatchData array.
