class ArtistsController < ApplicationController
  before_action :authorized_request, only: :create

  # GET /artists
  def index
    @artists = Artist.all

    render json: @artists
  end

  # POST /artists
  def create
    @artist = Artist.new(artist_params)
    @artist.user = @current_user

    if @artist.save
      render json: @artist, status: :created
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def artist_params
      params.require(:artist).permit(:stage_name, :full_name, :image_url)
    end
end
