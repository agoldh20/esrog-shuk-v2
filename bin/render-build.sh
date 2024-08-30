#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
#bundle exec rake assets:precompile
#bundle exec rake assets:clean
bundle exec rails db:schema:load DISABLE_DATABASE_ENVIRONMENT_CHECK=1
