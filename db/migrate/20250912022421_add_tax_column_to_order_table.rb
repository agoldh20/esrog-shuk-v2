class AddTaxColumnToOrderTable < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :tax, :decimal
  end
end
