class Api::V1::LineItemsController < ApplicationController
  before_action :set_api_v1_line_item, only: [:show, :update, :destroy]

  # GET /api/v1/line_items
  def index
    @api_v1_line_items = LineItem.all

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
      # @api_v1_line_item = LineItem.new(params[:_json][0])
      # @api_v1_line_item.save
    rescue
      render json: @api_v1_line_item.errors, status: :unprocessable_entity
    end
    # @api_v1_line_item = LineItem.new(api_v1_line_item_params)
    #
    # if @api_v1_line_item.save
    render status: :created
    # else
    #   render json: @api_v1_line_item.errors, status: :unprocessable_entity
    # end
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

  # Only allow a list of trusted parameters through.
  def api_v1_line_item_params
    params.fetch(:api_v1_line_item, {})
  end
end
