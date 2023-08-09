class AddOrderIdColumnToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :order_id, :integer
  end
end
