class AddDiscountIdColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :discount_id, :int
  end
end
