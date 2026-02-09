# Use official PHP image with extensions
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_pgsql zip

# Set working directory
WORKDIR /var/www/html

# Copy files
COPY . .

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port
EXPOSE 8000

# Run migrations and start Laravel

RUN php artisan config:clear
RUN php artisan cache:clear
RUN php artisan route:clear
CMD php artisan migrate --force && php artisan serve --host 0.0.0.0 --port 8000
