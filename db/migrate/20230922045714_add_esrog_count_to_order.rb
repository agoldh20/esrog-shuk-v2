class AddEsrogCountToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :esrog_count, :integer
  end
end
