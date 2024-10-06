class Api::V1::ItemsController < ApplicationController
  before_action :set_api_v1_items, only: [:show, :update, :destroy]

  def get_available_items
    esrogs = Esrog.where(year: Date.today.year, active: true).order(:id)
    grades = Grade.where(year: Date.today.year)
    aravots = Aravot.where(year: Date.today.year, active: true).order(:price)
    lulavs = Lulav.where(year: Date.today.year, active: true).order(:price)
    hadasims = Hadasim.where(year: Date.today.year, active: true).order(:price)
    extras = Extra.where(year: Date.today.year, active: true).order(:id)

    render json: {
      esrogs: esrogs,
      grades: grades,
      aravots: aravots,
      lulavs: lulavs,
      hadasims: hadasims,
      extras: extras,
    }
  end

  def show
  end

  def update
  end

  def destroy
  end
end
