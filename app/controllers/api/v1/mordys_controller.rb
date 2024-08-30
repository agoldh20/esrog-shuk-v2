class Api::V1::MordysController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_mordy, only: [:show, :update, :destroy]
  before_action :set_order, only: [:destroy]

  # GET /api/v1/mordys
  def index
    @api_v1_mordys = Mordy.all

    render json: @api_v1_mordys
  end

  # GET /api/v1/mordys/1
  def show
    render json: @api_v1_mordy
  end

  # POST /api/v1/mordys
  def create
    @api_v1_mordy = Mordy.new({
                                order_id: params[:order_id],
                                amount: params[:amount],
                                hatzalah: params[:hatzalah],
                                year: Date.today.year
                              })

    if @api_v1_mordy.save
      @api_v1_mordy.order.update(mordy_id: @api_v1_mordy.id)
      render json: @api_v1_mordy, status: :created
    else
      render json: @api_v1_mordy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/mordys/1
  def update
    if @api_v1_mordy.update(api_v1_mordy_params)
      render json: @api_v1_mordy
    else
      render json: @api_v1_mordy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/mordys/1
  def destroy
    @api_v1_mordy.destroy
    @order.update(mordy_id: nil)
  end

  def get_by_order_id
    mordy = Mordy.find_by(order_id: params[:order_id])

    render json: mordy
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_mordy
      @api_v1_mordy = Mordy.find(params[:id])
    end

    def set_order
      @order = Mordy.find(params[:id]).order
    end

    # Only allow a list of trusted parameters through.
    def api_v1_mordy_params
      params.fetch(:api_v1_mordy, {}).permit(:mordy)
    end
end
