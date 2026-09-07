#!/bin/sh
set -e

BACKUP_DIR="${BACKUP_DIR:-/app/db/db_dumps}"
mkdir -p "$BACKUP_DIR"

# If RENDER_DATABASE_URL is empty, try loading from config/application.yml or .env
if [ -z "$RENDER_DATABASE_URL" ]; then
  if [ -f "config/application.yml" ]; then
    RENDER_DATABASE_URL=$(grep -i "^RENDER_DATABASE_URL:" config/application.yml 2>/dev/null | head -n 1 | cut -d ':' -f 2- | tr -d ' "' | tr -d "'")
  fi
  if [ -z "$RENDER_DATABASE_URL" ] && [ -f ".env" ]; then
    RENDER_DATABASE_URL=$(grep -i "^RENDER_DATABASE_URL=" .env 2>/dev/null | head -n 1 | cut -d '=' -f 2- | tr -d '"' | tr -d "'")
  fi
fi

# Get yesterday's date (YYYYMMDD) since 4:00 AM captures the previous day's sales/data
DATE_STAMP=$(date -d "yesterday" +"%Y%m%d" 2>/dev/null || date -d "1 day ago" +"%Y%m%d" 2>/dev/null || date +"%Y%m%d")
BACKUP_FILE="$BACKUP_DIR/${DATE_STAMP}.dump"

echo "[$(date)] Starting daily PostgreSQL database backup for previous day ($DATE_STAMP)..."

if [ -n "$RENDER_DATABASE_URL" ]; then
  pg_dump "$RENDER_DATABASE_URL" --format=custom --no-acl --no-owner > "$BACKUP_FILE"
else
  export PGPASSWORD="${POSTGRES_PASSWORD:-secure_db_password_123}"
  pg_dump -h "${POSTGRES_HOST:-db}" -U "${POSTGRES_USER:-esrog_user}" -d "${POSTGRES_DB:-esrog_shuk_production}" --format=custom --no-acl --no-owner > "$BACKUP_FILE"
fi

echo "[$(date)] Backup completed successfully: $BACKUP_FILE"
