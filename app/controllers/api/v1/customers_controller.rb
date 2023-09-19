class Api::V1::CustomersController < ApplicationController
  before_action :authenticate_user
  before_action :set_api_v1_customer, only: [:show, :update, :destroy]

  # GET /api/v1/customers
  def index
    @api_v1_customers = Customer.all.order(:last_name)

    render json: @api_v1_customers
  end

  # GET /api/v1/customers/1
  def show
    render json: @api_v1_customer
  end

  # POST /api/v1/customers
  def create
    existing_customer = Customer.find_by(phone_number: params[:phone_number])

    if existing_customer
      return render json: existing_customer, status: 200
    end

    @api_v1_customer = Customer.new({
                                      first_name: params[:first_name],
                                      last_name: params[:last_name],
                                      phone_number: params[:phone_number],
                                      active: true,
                                      last_purchase_year: Date.today.year
                                    })

    if @api_v1_customer.save
      render json: @api_v1_customer, status: :created
    else
      render json: @api_v1_customer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/customers/1
  def update
    if @api_v1_customer.update(api_v1_customer_params)
      render json: @api_v1_customer
    else
      render json: @api_v1_customer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/customers/1
  def destroy
    @api_v1_customer.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_api_v1_customer
    @api_v1_customer = Customer.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def api_v1_customer_params
    params.fetch(:api_v1_customer, {})
  end
end
