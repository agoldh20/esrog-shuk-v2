class Order < ApplicationRecord
  has_many :line_items
  has_many :notes
  belongs_to :voucher, optional: true
  belongs_to :customer
  belongs_to :user, optional: true


  def total_price
    total = line_items.pluck(:line_total).map { |total| total.to_i }.reduce(:+)
    returned_price = voucher ? "#{total - voucher.amount} After Voucher" : total
    returned_price
  end

  def build_invoice_pdf
    pdf = Prawn::Document.new
    pdf.move_down 20
    pdf.formatted_text [{text: "Customer: ", styles: [:bold]}]
    pdf.text "#{customer.full_name}"
    pdf.text "#{customer.email}"
    pdf.text "#{customer.phone_number}"
    pdf.move_down 20
    pdf.formatted_text [{text: "Order: ", styles: [:bold]}, {text: "#{id}"}]
    line_items.each do |esrog_set|
      pdf.text build_string(esrog_set)
    end
    pdf.move_down 20
    pdf.formatted_text [{text: "Total: ", styles: [:bold]}, {text: "$#{total_price}"}]
    pdf.formatted_text [{text: "Order Status: ", styles: [:bold]}, {text: "#{status.capitalize}"}]

    pdf
  end

  def build_string(esrog_set)
    lulav =  esrog_set.lulav ? "#{esrog_set.lulav.kind} $#{esrog_set.lulav.price}; " : ""
    esrog =  esrog_set.esrog ? "#{esrog_set.esrog.kind} $#{esrog_set.esrog_price}; " : ""
    hadasim =  esrog_set.hadasim ? "#{esrog_set.hadasim.kind} $#{esrog_set.hadasim.price}; " : ""
    aravos =  esrog_set.aravot ? "#{esrog_set.aravot.kind} $#{esrog_set.aravot.price}; " : ""
    total = " - Line Total: #{esrog_set.line_total}"

    "#{lulav}#{esrog}#{hadasim}#{aravos}#{total}"
  end

  def self.sold_on_date(date)
    where("updated_at::date = ? AND status = ?", "#{date}", "paid")
  end

  def send_email_reciept
    attachments[reciept] = File.read(build_invoice_pdf)
    OrderMailer.with(customer: customer).email_reciept(customer).deliver_now
  end

  def validate_customer

  end
end
