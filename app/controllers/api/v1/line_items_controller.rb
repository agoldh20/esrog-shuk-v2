class Api::V1::LineItemsController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_line_item, only: [:show, :update, :destroy]
  before_action :set_order, only: [:create, :destroy]

  # GET /api/v1/line_items
  def index
    order_id = params[:order_id]

    @api_v1_line_items = order_id ? LineItem.where(order_id: order_id) : LineItem.all

    render json: @api_v1_line_items
  end

  # GET /api/v1/line_items/1
  def show
    render json: @api_v1_line_item
  end

  # POST /api/v1/line_items
  def create
    LineItem.where(order_id: params[:order_id]).destroy_all

    begin
      params[:line_items].each do |line|
        @api_v1_line_item = LineItem.create!({
                                               order_id: params[:order_id],
                                               esrog_id: line[:esrog_id],
                                               grade_id: line[:grade_id],
                                               lulav_id: line[:lulav_id],
                                               hadasim_id: line[:hadasim_id],
                                               aravot_id: line[:aravot_id],
                                               extra_id: line[:extra_id],
                                               line_total: line[:line_total]
                                             })
      end

      @order.update(total: params[:line_items].pluck(:line_total).reduce(:+))
    rescue
      render json: @api_v1_line_item.errors, status: :unprocessable_entity
    end

    render status: :created
  end

  # PATCH/PUT /api/v1/line_items/1
  def update
    if @api_v1_line_item.update(api_v1_line_item_params)
      render json: @api_v1_line_item
    else
      render json: @api_v1_line_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/line_items/1
  def destroy
    @api_v1_line_item.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_line_item
    @api_v1_line_item = LineItem.find(params[:id])
  end

  def set_order
    @order = Order.find(params[:order_id])
  end

  # Only allow a list of trusted parameters through.
  def api_v1_line_item_params
    params.fetch(:api_v1_line_item, {})
  end
end
