class Api::V1::VouchersController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_voucher, only: [:show, :update, :destroy]
  before_action :set_order, only: [:destroy]

  # GET /api/v1/vouchers
  def index
    @api_v1_vouchers = Voucher.all

    render json: @api_v1_vouchers
  end

  # GET /api/v1/vouchers/1
  def show
    render json: @api_v1_voucher
  end

  # POST /api/v1/vouchers
  def create
    @api_v1_voucher = Voucher.new({order_id: params[:order_id], provider: params[:provider], amount: params[:amount]})

    if @api_v1_voucher.save
      @api_v1_voucher.order.update(voucher_id: @api_v1_voucher.id)
      render json: @api_v1_voucher, status: :created
    else
      render json: @api_v1_voucher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/vouchers/1
  def update
    if @api_v1_voucher.update(api_v1_voucher_params)
      render json: @api_v1_voucher
    else
      render json: @api_v1_voucher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/vouchers/1
  def destroy
    @api_v1_voucher.destroy
    @order.update(voucher_id: nil)
  end

  def get_by_order_id
    voucher = Voucher.find_by(order_id: params[:order_id])

    render json: voucher
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_voucher
    @api_v1_voucher = Voucher.find(params[:id])
  end

  def set_order
    @order = Voucher.find(params[:id]).order
  end

  # Only allow a list of trusted parameters through.
  def api_v1_voucher_params
    params.fetch(:api_v1_voucher, {}).permit(:voucher)
  end
end
