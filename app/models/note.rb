class Note < ApplicationRecord
  has_many :orders
  belongs_to :order
end
