class Api::V1::Admin::ExtrasController < ApplicationController
  before_action :authenticate_admin

  # GET /api/v1/admin/extras
  def index
    @extras = Extra.where(year: [Date.today.year, Date.today.year.to_s]).order(:id)
    render json: @extras
  end

  # POST /api/v1/admin/extras
  def create
    @extra = Extra.new(extra_params)
    @extra.year ||= Date.today.year.to_s
    @extra.active = true if @extra.active.nil?

    if @extra.save
      render json: @extra, status: :created
    else
      render json: @extra.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/admin/extras/1
  def update
    @extra = Extra.find(params[:id])
    if @extra.update(extra_params)
      render json: @extra
    else
      render json: @extra.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/admin/extras/1
  def destroy
    @extra = Extra.find_by(id: params[:id])
    if @extra && @extra.year.to_s == Date.today.year.to_s
      @extra.destroy
      render json: { status: :ok }
    else
      render json: { error: "Cannot delete item from a previous year" }, status: :unprocessable_entity
    end
  end

  private

  def extra_params
    params.permit(:kind, :price, :year, :active)
  end
end
