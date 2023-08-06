Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :customers
      resources :line_items
      resources :notes
      resources :vouchers

      resources :orders
      get '/orders/?customerId=:id' => 'orders#get_all_by_customer_id'

      get '/available-items' => 'items#get_available_items'
    end
  end
end
