class Api::V1::NotesController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_note, only: [:show, :update, :destroy]
  before_action :set_order, only: [:destroy]

  # GET /api/v1/notes
  def index
    @api_v1_notes = Note.all

    render json: @api_v1_notes
  end

  # GET /api/v1/notes/1
  def show
    render json: @api_v1_note
  end

  # POST /api/v1/notes
  def create
    @api_v1_note = Note.new({ note: params[:note], order_id: params[:order_id] })

    if @api_v1_note.save
      @api_v1_note.order.update(note_id: @api_v1_note.id)
      render json: @api_v1_note, status: :created
    else
      render json: @api_v1_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/notes/1
  def update
    if @api_v1_note.update(api_v1_note_params)
      render json: @api_v1_note
    else
      render json: @api_v1_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/notes/1
  def destroy
    @order.update(note_id: nil)
    @api_v1_note.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_note
    @api_v1_note = Note.find(params[:id])
  end

  def set_order
    @order = Note.find(params[:id]).order
  end

  # Only allow a list of trusted parameters through.
  def api_v1_note_params
    params.fetch(:api_v1_note, {}).permit(:note)
  end
end
