class Api::V1::Admin::AdminController < ApplicationController
  before_action :authenticate_admin

  def get_open_orders
    orders = Order.where(status: "open", year: Date.today.year).joins(:customer).order(:last_name)

    render json: orders, include: :customer
  end

  def get_current_mordys
    mordys =  Mordy.where(year: Date.today.year).joins(:customer)

    # render json: mordys, include: {customer: {only: [:first_name, :last_name]}}
    render json: mordys, include: :customer
  end

  def get_daily_totals
    date = Date.parse(params[:date]).all_day || Time.current.all_day

    orders = Order. where(status: "paid", updated_at: date)
    totals = []

    ["cash", "check", "quick pay", "other"].each do |type|
      typeOrders = orders.filter {|order| order.payment_type == type}
      totals << {
        type: type,
        count: typeOrders.size,
        total: typeOrders.pluck(:total).reduce(:+)
      }
    end

    render json: totals
  end

  # def send_text_message
  #   test_numbers = params[:numbers].split(",").map { |number| number.gsub(/[^0-9]/, "") } if params[:numbers]
  #   customers = !test_numbers.empty? ? test_numbers : Customer.select("DISTINCT phone_number").where("phone_number != ''").map { |c| c.phone_number }
  #
  #   # customers = test_numbers
  #
  #   image = [params[:twilio_image]]
  #   text_body = params[:text_body]
  #   account_sid = ENV['twilio_account_sid']
  #   auth_token = ENV['twilio_auth_token']
  #   twilio_number = "+1#{ENV['twilio_number'].gsub(/[^0-9]/, "")}"
  #   client = Twilio::REST::Client.new(account_sid, auth_token)
  #
  #   bad_number_list = []
  #
  #   customers.each do |customer|
  #     begin
  #       client.lookups
  #             .v1
  #             .phone_numbers(customer)
  #             .fetch(country_code: 'US')
  #
  #       client.messages.create(
  #         body: text_body,
  #         from: twilio_number,
  #         media_url: image,
  #         to: "+1#{customer}"
  #       )
  #     rescue => e
  #       puts "!!!!! TWILIO: #{e}"
  #       bad_number_list << customer
  #     end
  #   end
  #
  #   puts "!!!!! #bad number list: #{bad_number_list}" if !bad_number_list.empty?
  #
  #   render json: { status: 500 }
  # end
end
