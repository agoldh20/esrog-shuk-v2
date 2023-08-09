class AddOrderIdColumnToVoucher < ActiveRecord::Migration[6.1]
  def change
    add_column :vouchers, :order_id, :integer
  end
end
