# Be sure to restart your server when you modify this file.

# Disable parameter wrapping for JSON so incoming requests match flat attributes (as in seeds.rb)
ActiveSupport.on_load(:action_controller) do
  wrap_parameters format: []
end
