class LineItem < ApplicationRecord
  belongs_to :order
  belongs_to :lulav, optional: true
  belongs_to :hadasim, optional: true
  belongs_to :aravot, optional: true
  belongs_to :esrog, optional: true
  belongs_to :extra, optional: true
  belongs_to :grade, optional: true
  belongs_to :discount, optional: true
end
