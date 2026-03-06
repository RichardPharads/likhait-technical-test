# syntax=docker/dockerfile:1
FROM ruby:3.3.7-slim

WORKDIR /rails

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    default-mysql-client \
    default-libmysqlclient-dev \
    libyaml-dev && \
    rm -rf /var/lib/apt/lists/*

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 4 --retry 3

# Add gems to PATH
ENV PATH="/rails/vendor/bundle/ruby/3.3.0/bin:${PATH}"

# Copy application code
COPY . .

# Create tmp directory and ensure it's writable
RUN mkdir -p tmp/pids && chmod 777 tmp/pids

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]