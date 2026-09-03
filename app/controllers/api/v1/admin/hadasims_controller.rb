class Api::V1::Admin::HadasimsController < ApplicationController
  before_action :authenticate_admin

  # GET /api/v1/admin/hadasims
  def index
    @hadasims = Hadasim.where(year: [Date.today.year, Date.today.year.to_s]).order(:id)
    render json: @hadasims
  end

  # POST /api/v1/admin/hadasims
  def create
    @hadasim = Hadasim.new(hadasim_params)
    @hadasim.year ||= Date.today.year.to_s
    @hadasim.active = true if @hadasim.active.nil?

    if @hadasim.save
      render json: @hadasim, status: :created
    else
      render json: @hadasim.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/admin/hadasims/1
  def update
    @hadasim = Hadasim.find(params[:id])
    if @hadasim.update(hadasim_params)
      render json: @hadasim
    else
      render json: @hadasim.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/admin/hadasims/1
  def destroy
    @hadasim = Hadasim.find_by(id: params[:id])
    if @hadasim && @hadasim.year.to_s == Date.today.year.to_s
      @hadasim.destroy
      render json: { status: :ok }
    else
      render json: { error: "Cannot delete item from a previous year" }, status: :unprocessable_entity
    end
  end

  private

  def hadasim_params
    params.permit(:kind, :price, :year, :active)
  end
end
