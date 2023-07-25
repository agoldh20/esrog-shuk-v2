class Api::V1::OrdersController < ApplicationController
  before_action :set_api_v1_order, only: [:show, :update, :destroy]

  # GET /api/v1/orders
  def index
    @api_v1_orders = Order.all

    render json: @api_v1_orders
  end

  # GET /api/v1/orders/1
  def show
    render json: @api_v1_order
  end

  # POST /api/v1/orders
  def create
    @api_v1_order = Order.new({
                                customer_id: params[:customer_id],
                                user_id: params[:user_id],
                                status: "open",
                                year: Date.today.year
                              })

    if @api_v1_order.save
      render json: @api_v1_order, status: :created
    else
      render json: @api_v1_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/orders/1
  def update
    if @api_v1_order.update(api_v1_order_params)
      render json: @api_v1_order
    else
      render json: @api_v1_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/orders/1
  def destroy
    @api_v1_order.destroy
  end

  def get_all_by_customer_id
    @api_v1_orders = Order.where(customer_id: params[:customer_id], status: "open")

    render json: @api_v1_orders
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_order
      @api_v1_order = Api::V1::Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_v1_order_params
      params.fetch(:api_v1_order, {})
    end
end
