class RockpaperscissorsController < ApplicationController

  def form
    render :form
  end

  def result

    @appthrow = ['Rock', 'Paper', 'Scissors'].sample
    @userthrow = params[:throw]
    if @appthrow == @userthrow
      @answer = "You Win!"
    else
      @answer = "You Lose!"
    end

    render :result
  end

end
