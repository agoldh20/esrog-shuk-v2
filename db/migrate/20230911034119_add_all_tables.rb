class AddAllTables < ActiveRecord::Migration[6.1]
  def change
    create_table "aravots", force: :cascade do |t|
      t.string "kind"
      t.string "price"
      t.string "year"
      t.boolean "active"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "customers", force: :cascade do |t|
      t.string "phone_number"
      t.string "email"
      t.boolean "active"
      t.string "first_name"
      t.string "last_name"
      t.integer "last_purchase_year"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "discounts", force: :cascade do |t|
      t.integer "order_id"
      t.integer "amount"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "esrogs", force: :cascade do |t|
      t.string "kind"
      t.boolean "pitum"
      t.string "year"
      t.boolean "active"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "extras", force: :cascade do |t|
      t.string "kind"
      t.integer "price"
      t.string "year"
      t.boolean "active"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "grades", force: :cascade do |t|
      t.string "year"
      t.string "grade"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "hadasims", force: :cascade do |t|
      t.string "kind"
      t.integer "price"
      t.string "year"
      t.boolean "active"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "line_items", force: :cascade do |t|
      t.integer "order_id"
      t.integer "lulav_id"
      t.integer "hadasim_id"
      t.integer "aravot_id"
      t.integer "esrog_id"
      t.integer "extra_id"
      t.integer "line_total"
      t.integer "grade_id"
      t.integer "discount_id"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "lulavs", force: :cascade do |t|
      t.string "kind"
      t.integer "price"
      t.string "year"
      t.boolean "active"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "notes", force: :cascade do |t|
      t.text "note"
      t.integer "order_id"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "orders", force: :cascade do |t|
      t.integer "customer_id"
      t.string "status"
      t.integer "total"
      t.integer "user_id"
      t.string "year"
      t.integer "voucher_id"
      t.string "payment_type"
      t.integer "note_id"
      t.integer "discount_id"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "users", force: :cascade do |t|
      t.string "username"
      t.string "password_digest"
      t.boolean "admin"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

    create_table "vouchers", force: :cascade do |t|
      t.string "provider"
      t.integer "amount"
      t.integer "order_id"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
