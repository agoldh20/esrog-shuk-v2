#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# Wait for PostgreSQL database to be responsive
if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for database connection..."
  until bundle exec rails db:prepare; do
    echo "Database is unavailable or preparing... retrying in 2 seconds"
    sleep 2
  done
  echo "Database is ready and migrations are applied."
fi

# Then exec the container's main process (what's set as CMD in Dockerfile).
exec "$@"
