class Player < ActiveRecord::Base
  has_and_belongs_to_many :games
  has_many :wins, class_name: "Game", foreign_key: :winner_id 
end
