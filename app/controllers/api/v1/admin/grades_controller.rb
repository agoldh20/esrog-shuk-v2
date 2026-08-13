class Api::V1::Admin::GradesController < ApplicationController
  before_action :authenticate_admin

  # GET /api/v1/admin/grades
  def index
    @grades = Grade.where(year: [Date.today.year, Date.today.year.to_s]).order(:id)
    render json: @grades
  end

  # POST /api/v1/admin/grades
  def create
    esrog_id = params[:esrog_id]
    unless esrog_id.present?
      return render json: { error: "esrog_id is required" }, status: :unprocessable_entity
    end

    raw_grades = params[:grades]
    grade_names = if raw_grades.is_a?(Array)
                    raw_grades.map(&:to_s).map(&:strip).reject(&:empty?)
                  elsif raw_grades.is_a?(String)
                    raw_grades.split(",").map(&:strip).reject(&:empty?)
                  else
                    []
                  end

    current_year = Date.today.year.to_s
    existing_grades = Grade.where(esrog_id: esrog_id, year: [current_year, Date.today.year])

    # Only delete grades matching this esrog for THIS year that are no longer in the list
    existing_grades.where.not(grade: grade_names).destroy_all

    existing_names = Grade.where(esrog_id: esrog_id, year: [current_year, Date.today.year]).pluck(:grade)
    (grade_names - existing_names).each do |g_name|
      Grade.create(esrog_id: esrog_id, grade: g_name, year: current_year)
    end

    updated_grades = Grade.where(esrog_id: esrog_id, year: [current_year, Date.today.year])
    render json: updated_grades, status: :ok
  end

  # DELETE /api/v1/admin/grades/:id
  def destroy
    @grade = Grade.find_by(id: params[:id])
    if @grade && @grade.year.to_s == Date.today.year.to_s
      @grade.destroy
      render json: { status: :ok }
    else
      render json: { error: "Cannot delete item from a previous year" }, status: :unprocessable_entity
    end
  end
end
