#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for PostgreSQL database connection..."
  
  # Wait for Postgres port to be open
  until pg_isready -h db -p 5432; do
    echo "PostgreSQL is booting... retrying in 2 seconds"
    sleep 2
  done

  echo "PostgreSQL port is ready! Preparing database schema & migrations..."
  bundle exec rails db:prepare || bundle exec rails db:migrate
  echo "Database is ready and up to date."
fi

# Then exec the container's main process (CMD in Dockerfile).
exec "$@"
