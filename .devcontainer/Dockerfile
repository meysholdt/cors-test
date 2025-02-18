FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# Update package lists and install basic utilities
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        curl \
        git \
        gnupg \
        wget \
        unzip \
        python3 \
        build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 20.x (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Install common global npm packages
RUN npm install -g \
    yarn \
    pnpm \
    typescript \
    next \
    eslint \
    prettier

# Set default shell to bash
ENV SHELL /bin/bash

# use this Dockerfile to install additional tools you might need, e.g.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
