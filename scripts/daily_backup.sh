#!/bin/sh
set -e

BACKUP_DIR="/app/db/db_dumps"
mkdir -p "$BACKUP_DIR"

# Get yesterday's date (YYYYMMDD) since 4:00 AM captures the previous day's sales/data
DATE_STAMP=$(date -d "yesterday" +"%Y%m%d" 2>/dev/null || date -d "1 day ago" +"%Y%m%d" 2>/dev/null || date +"%Y%m%d")
BACKUP_FILE="$BACKUP_DIR/${DATE_STAMP}.dump"

echo "[$(date)] Starting daily PostgreSQL database backup for previous day ($DATE_STAMP)..."

export PGPASSWORD="${POSTGRES_PASSWORD:-secure_db_password_123}"

pg_dump \
  -h db \
  -U "${POSTGRES_USER:-esrog_user}" \
  -d "${POSTGRES_DB:-esrog_shuk_production}" \
  --format=custom \
  --no-acl \
  --no-owner \
  > "$BACKUP_FILE"

echo "[$(date)] Backup completed successfully: $BACKUP_FILE"
