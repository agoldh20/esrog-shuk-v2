class Api::V1::Admin::AravotsController < ApplicationController
  before_action :authenticate_admin

  # GET /api/v1/admin/aravots
  def index
    @aravots = Aravot.where(year: [Date.today.year, Date.today.year.to_s]).order(:id)
    render json: @aravots
  end

  # POST /api/v1/admin/aravots
  def create
    @aravot = Aravot.new(aravot_params)
    @aravot.year ||= Date.today.year.to_s
    @aravot.active = true if @aravot.active.nil?

    if @aravot.save
      render json: @aravot, status: :created
    else
      render json: @aravot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/admin/aravots/1
  def update
    @aravot = Aravot.find(params[:id])
    if @aravot.update(aravot_params)
      render json: @aravot
    else
      render json: @aravot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/admin/aravots/1
  def destroy
    @aravot = Aravot.find_by(id: params[:id])
    if @aravot && @aravot.year.to_s == Date.today.year.to_s
      @aravot.destroy
      render json: { status: :ok }
    else
      render json: { error: "Cannot delete item from a previous year" }, status: :unprocessable_entity
    end
  end

  private

  def aravot_params
    if params[:aravot].present?
      params.require(:aravot).permit(:kind, :price, :year, :active)
    else
      params.permit(:kind, :price, :year, :active, :id)
    end
  end
end
