class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      jwt = JWT.encode(
        {
          user_id: user.id, # the data to encode
          exp: 7.days.from_now.to_i, # the expiration time
        },
        Rails.application.credentials.fetch(:secret_key_base), # the secret key
        "HS256" # the encryption algorithm
      )
      render json: {
        status: :created,
        logged_in: true,
        user: {
          id: user.id,
          username: user.display_name,
          admin: user.admin,
        },
        jwt: jwt,
        message: "login in successful"
      }
    else
      render json: { status: :unauthorized }
    end
  end

  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def logout
    session[:user_id] = nil
    render json: {
      status: 200,
      logged_out: true
    }
  end
end
