class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.decimal :duration
      t.integer :winner_id
      t.timestamps
    end
  end
end
