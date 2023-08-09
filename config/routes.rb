Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :customers

      resources :line_items
      get '/line_items/?order_id=:id' => 'line_items#get_by_order_id'

      resources :notes
      get '/notes/?order_id=:id' => 'notes#get_by_order_id'

      resources :vouchers
      get '/vouchers/?order_id=:id' => 'vouchers#get_by_order_id'

      resources :orders
      get '/orders/?customerId=:id' => 'orders#get_all_by_customer_id'

      get '/available-items' => 'items#get_available_items'
    end
  end
end
