class Api::MenuItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: MenuItem.all
  end

  def show
    render json: @item
  end

  def create
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.reqire(:menuitems).permit(:name, :description, :price)
    end
end
