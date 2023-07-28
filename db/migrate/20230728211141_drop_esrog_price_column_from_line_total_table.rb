class DropEsrogPriceColumnFromLineTotalTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :line_items, :esrog_price, :integer
  end
end
