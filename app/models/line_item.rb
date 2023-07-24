class LineItem < ApplicationRecord
  belongs_to :order
  belongs_to :lulav, optional: true
  belongs_to :hadasim, optional: true
  belongs_to :aravot, optional: true
  belongs_to :esrog, optional: true
  belongs_to :extra, optional: true
  belongs_to :grade, optional: true

  def calculate_line_total
    lulav_price = lulav ? lulav.price : 0
    hadasim_price = hadasim ? hadasim.price : 0
    aravot_price = aravot ? aravot.price : "0"
    extra_price = extra ? extra.price : 0
    esrog_price = self.esrog_price ? self.esrog_price : 0

    self.line_total = lulav_price + hadasim_price + aravot_price.to_i + esrog_price + extra_price
  end
end
