class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
    @mountain = Mountain.new
  end

  def create
    mountain = Mountain.create mountain_params
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_params
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

  private
  def mountain_params
    # String parameters: whitelist of sanitised input (stuff thats ok for databse)
    params.require(:mountain).permit(:name, :country, :height, :image)
  end
end
