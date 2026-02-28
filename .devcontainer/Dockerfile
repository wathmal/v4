# Use the official Microsoft Dev Containers Node 18 image (Debian-based, multi-arch)
FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install system dependencies required for gatsby-plugin-sharp and sharp
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    libvips-dev \
    libvips \
    pkg-config \
    python3 \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Ensure Yarn is available globally
RUN corepack enable && corepack prepare yarn@stable --activate
