class Api::V1::VouchersController < ApplicationController
  before_action :set_api_v1_voucher, only: [:show, :update, :destroy]

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
    @api_v1_voucher = Voucher.new(api_v1_voucher_params)

    if @api_v1_voucher.save
      render json: @api_v1_voucher, status: :created, location: @api_v1_voucher
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
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_voucher
    @api_v1_voucher = Voucher.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def api_v1_voucher_params
    params.fetch(:api_v1_voucher, {}).permit(:voucher)
  end
end