class SecretnumberController < ApplicationController

  def form
    render :form
  end

  def result
    @secretnumber = (1..10).to_a.sample
    @p = params[:guess].to_i
    if @p == @secretnumber
      @answer = "You guessed correctly!"
    else
      @answer = "You guessed wrong!"
    end
    render :result
  end

end
