FROM ruby:3.2.2-slim

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
      build-essential \
      libpq-dev \
      postgresql-client \
      git \
      curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy Gemfile, Gemfile.lock, and .ruby-version for bundle install
COPY Gemfile Gemfile.lock .ruby-version ./
RUN gem install bundler && \
    bundle config set --local deployment 'true' && \
    bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3

# Copy application code
COPY . .

# Copy and setup entrypoint script
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
