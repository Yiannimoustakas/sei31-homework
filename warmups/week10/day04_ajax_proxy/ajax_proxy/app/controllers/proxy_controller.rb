class ProxyController < ApplicationController

  def index

  end

  def fetch
    url = params[:url]

    unless url.present?
      render json: {}
      return
    end
    response = HTTParty.get url
    render json: {data: response.body}
  end

end
