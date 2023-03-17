#!/bin/bash
APP_DIR="/var/www/html/askHow"
# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Change permissions to ubuntu
sudo chown ubuntu:www-data -R $APP_DIR

# Install NPM modules
cd $APP_DIR
/usr/bin/npm install
