class CreateBands < ActiveRecord::Migration[5.2]
  def change
    create_table :bands do |t|
      t.text :name
      t.text :yearsactive
      t.text :genre
      t.text :members
      t.text :image
    end
  end
end
