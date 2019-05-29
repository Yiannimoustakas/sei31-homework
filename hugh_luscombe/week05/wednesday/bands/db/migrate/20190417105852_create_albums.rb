class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :title
      t.text :year
      t.text :image
    end
  end
end
