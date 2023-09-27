class Api::V1::DiscountsController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_discount, only: [:show, :update, :destroy]
  before_action :set_order, only: [:destroy]

  # GET /api/v1/discounts
  def index
    @api_v1_discounts = Discount.all

    render json: @api_v1_discounts
  end

  # GET /api/v1/discounts/1
  def show
    render json: @api_v1_discount
  end

  # POST /api/v1/discounts
  def create
    @api_v1_discount = Discount.new({order_id: params[:order_id], amount: params[:amount]})

    if @api_v1_discount.save
      @api_v1_discount.order.update(discount_id: @api_v1_discount.id)
      render json: @api_v1_discount, status: :created
    else
      render json: @api_v1_discount.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/discounts/1
  def update
    if @api_v1_discount.update(api_v1_discount_params)
      render json: @api_v1_discount
    else
      render json: @api_v1_discount.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/discounts/1
  def destroy
    @api_v1_discount.destroy
    @order.update(discount_id: nil)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_discount
    @api_v1_discount = Discount.find(params[:id])
  end

  def set_order
    @order = Discount.find(params[:id]).order
  end

  # Only allow a list of trusted parameters through.
  def api_v1_discount_params
    params.fetch(:api_v1_discount, {}).permit(:discount)
  end
end
