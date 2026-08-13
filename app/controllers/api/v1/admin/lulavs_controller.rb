class Api::V1::Admin::LulavsController < ApplicationController
  before_action :authenticate_admin

  # GET /api/v1/admin/lulavs
  def index
    @lulavs = Lulav.where(year: Date.today.year).order(:id)
    render json: @lulavs
  end

  # POST /api/v1/admin/lulavs
  def create
    @lulav = Lulav.new(lulav_params)
    @lulav.year ||= Date.today.year.to_s
    @lulav.active = true if @lulav.active.nil?

    if @lulav.save
      render json: @lulav, status: :created
    else
      render json: @lulav.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/admin/lulavs/1
  def update
    @lulav = Lulav.find(params[:id])
    if @lulav.update(lulav_params)
      render json: @lulav
    else
      render json: @lulav.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/admin/lulavs/1
  def destroy
    @lulav = Lulav.find(params[:id])
    @lulav.destroy
    render json: { status: :ok }
  end

  private

  def lulav_params
    if params[:lulav].present?
      params.require(:lulav).permit(:kind, :price, :year, :active)
    else
      params.permit(:kind, :price, :year, :active, :id)
    end
  end
end
