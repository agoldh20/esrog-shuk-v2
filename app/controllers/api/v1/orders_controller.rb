class Api::V1::OrdersController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_order, only: [:show, :update, :destroy]

  # GET /api/v1/orders
  def index
    status = params[:status]
    customer_id = params[:customer_id]
    date = params[:date]

    custom_params = {
      year: Date.today.year
    }

    custom_params[:status] = status if status
    custom_params[:customer_id] = customer_id if customer_id
    custom_params[:updated_at] = date if date

    @api_v1_orders = Order.where(custom_params).order(updated_at: :desc)

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

    if @api_v1_order.save!
      render json: @api_v1_order, status: :created
    else
      render json: @api_v1_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/orders/1
  def update
    @api_v1_order.status = params[:order][:status] || @api_v1_order.status
    @api_v1_order.total = params[:order][:total] || @api_v1_order.total
    @api_v1_order.user_id = params[:order][:user_id] || @api_v1_order.user_id
    @api_v1_order.voucher_id = params[:order][:voucher_id] || @api_v1_order.voucher_id
    @api_v1_order.payment_type = params[:order][:payment_type] || @api_v1_order.payment_type
    @api_v1_order.note_id = params[:order][:note][:id] || @api_v1_order.note_id if params[:order][:note]
    @api_v1_order.voucher_id = params[:order][:voucher][:id] || @api_v1_order.voucher_id if params[:order][:voucher]

    if @api_v1_order.save!
      render json: @api_v1_order
    else
      render json: @api_v1_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/orders/1
  def destroy
    LineItem.where(order_id: params[:id]).destroy_all
    Note.where(order_id: params[:id]).destroy_all
    Voucher.where(order_id: params[:id]).destroy_all
    Discount.where(order_id: params[:id]).destroy_all
    @api_v1_order.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_order
    @api_v1_order = Order.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def api_v1_order_params
    params.fetch(:api_v1_order, {})
  end
end
