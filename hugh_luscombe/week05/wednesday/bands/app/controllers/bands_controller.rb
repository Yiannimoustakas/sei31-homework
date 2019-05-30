class BandsController < ApplicationController
  def index
    @bands = Band.all
  end
  def show
    @band = Band.find params[:id]
  end
  def new
    @band = Band.new
  end
  def create
    band = Band.create band_params
    redirect_to band_path(band.id)
  end
  def edit
    @band = Band.find params[:id]
  end
  def update
    band = Band.find params[:id]
    band.update band_params
    redirect_to band_path(band.id)
  end
  def destroy
    band = Band.find params[:id]
    band.destroy
    redirect_to bands_path
  end
  private
  def band_params
    params.require(:band).permit(:name, :yearsactive, :genre, :members, :image)
  end
end
