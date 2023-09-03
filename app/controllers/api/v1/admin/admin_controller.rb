class Api::V1::Admin::AdminController < ApplicationController
  before_action :authenticate_admin

  def get_open_orders
    orders = Order.where(status: "open", year: Date.today.year).joins(:customer).order(:last_name)

    render json: orders, include: :customer
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
end
