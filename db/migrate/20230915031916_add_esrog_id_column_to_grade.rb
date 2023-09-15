class AddEsrogIdColumnToGrade < ActiveRecord::Migration[6.1]
  def change
    add_column :grades, :esrog_id, :integer
  end
end
