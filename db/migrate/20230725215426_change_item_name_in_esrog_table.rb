class ChangeItemNameInEsrogTable < ActiveRecord::Migration[6.1]
  def change
    rename_column :extras, :item, :kind
  end
end
