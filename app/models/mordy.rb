class Mordy < ApplicationRecord
  has_many :orders
  belongs_to :order
end
