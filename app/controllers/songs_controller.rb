class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy]

  # GET /artist/1/songs
  def index
    @artist = Artist.find(params[:artist_id])
    @songs = Song.where(artist_id: @artist.id)

    render json: @songs, include: :artists
  end

  # POST /artist/1/songs
  def create
    @artist = Artist.find(params[:artist_id])
    @song = Song.new(song_params)

    if @song.save
      render json: @song, include: :artists, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artist/1/songs/1
  def update
    if @song.update(song_params)
      render json: @song, include: :artists
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artist/1/songs/1
  def destroy
    @song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = @current_user.songs.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def song_params
      params.require(:song).permit(:name, :release_date, :link, :artist_id)
    end
end
