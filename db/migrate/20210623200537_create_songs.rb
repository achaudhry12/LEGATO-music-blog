class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :release_date
      t.string :link
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
