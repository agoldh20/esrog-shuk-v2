#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for PostgreSQL database connection..."
  
  until pg_isready -h db -p 5432; do
    echo "PostgreSQL is booting... retrying in 2 seconds"
    sleep 2
  done

  echo "PostgreSQL port is ready! Loading schema and running migrations..."
  bundle exec rails db:schema:load || bundle exec rails db:migrate
  echo "Database schema loaded and migrations are up to date."
fi

# Then exec the container's main process (CMD in Dockerfile).
exec "$@"
