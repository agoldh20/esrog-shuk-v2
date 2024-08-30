class Mordy < ApplicationRecord
  has_one :order
  belongs_to :order
  has_one :customer, through: :order
end
