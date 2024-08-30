class Order < ApplicationRecord
  belongs_to :note, optional: true
  belongs_to :voucher, optional: true
  belongs_to :mordy, optional: true
  belongs_to :discount, optional: true
  belongs_to :customer
  belongs_to :user, optional: true
  has_many :line_items
  has_many :notes
  has_many :vouchers
  has_many :mordys
  has_many :discounts
end
