Rails.application.routes.draw do

  resources :sessions, only: [:create]
  resources :users

  get :logged_in, to: "sessions#logged_in"
  delete :logout, to: "sessions#logout"

  namespace :api do
    namespace :v1 do
      resources :customers

      resources :line_items
      get '/line_items/?order_id=:id' => 'line_items#get_by_order_id'

      resources :notes
      get '/notes/?order_id=:id' => 'notes#get_by_order_id'

      resources :vouchers
      get '/vouchers/?order_id=:id' => 'vouchers#get_by_order_id'

      resources :discounts
      get '/discounts/?order_id=:id' => 'discounts#get_by_order_id'

      resources :mordys
      get '/mordys/?order_id=:id' => 'mordys#get_by_order_id'

      resources :orders

      get '/available-items' => 'items#get_available_items'

      namespace :admin do
        get '/open-orders' => 'admin#get_open_orders'
        get '/daily-totals' => 'admin#get_daily_totals'
        get '/mordys' => 'admin#get_current_mordys'
        post '/send-text-message' => 'admin#send_text_message'
      end
    end
  end
end
