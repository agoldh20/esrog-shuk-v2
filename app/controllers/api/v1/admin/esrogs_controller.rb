class Api::V1::Admin::EsrogsController < ApplicationController
  before_action :authenticate_admin

  # GET /api/v1/admin/esrogs
  def index
    @esrogs = Esrog.where(year: [Date.today.year, Date.today.year.to_s]).order(:id)
    render json: @esrogs
  end

  # POST /api/v1/admin/esrogs
  def create
    @esrog = Esrog.new(esrog_params)
    @esrog.pitum = false if @esrog.pitum.nil?
    @esrog.year ||= Date.today.year.to_s
    @esrog.active = true if @esrog.active.nil?

    if @esrog.save
      render json: @esrog, status: :created
    else
      render json: @esrog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/admin/esrogs/1
  def update
    @esrog = Esrog.find(params[:id])
    if @esrog.update(esrog_params)
      render json: @esrog
    else
      render json: @esrog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/admin/esrogs/1
  def destroy
    @esrog = Esrog.find_by(id: params[:id])
    if @esrog && @esrog.year.to_s == Date.today.year.to_s
      @esrog.destroy
      render json: { status: :ok }
    else
      render json: { error: "Cannot delete item from a previous year" }, status: :unprocessable_entity
    end
  end

  private

  def esrog_params
    params.permit(:kind, :pitum, :year, :active)
  end
end
