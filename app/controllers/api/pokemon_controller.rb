class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @poke = Pokemon.find(params[:id])
    render :show
  end

  def create
    @poke = Pokemon.new(poke_params)

    if @poke.save!
      render :show
    else
      flash[:errors] = @poke.errors.full_messages
      render :create
    end
  end

  private

  def poke_params
    params.require(:poke).permit(:name, :attack, :defense, :poke_type, :moves, :image_url, :items)
  end
end
