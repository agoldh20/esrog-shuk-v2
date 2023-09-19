class UsersController < ApplicationController
  def create
    existing_user = User.find_by(username: params[:username])

    user = existing_user ? existing_user : User.create!(
      username: params[:username],
      password: params[:password],
      display_name: params[:display_name],
      password_confirmation: params[:password_confirmation]
    )

    if user
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end
end
