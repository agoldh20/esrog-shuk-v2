class AddMordyIdToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :mordy_id, :integer
  end
end
