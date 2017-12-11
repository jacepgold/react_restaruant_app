class Api::MenusController < ApplicationController
  before_action :set_menu, except: [:create]

  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
  
  private
    def set_menu
      @menu = Menu.find(params[:id])
    end

    def menu_params
      params.require(:menu).permit(:item, :price, :description)
    end
end
