#!/bin/bash
APPS_DIR="/var/www/html"
# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Stop the app and restart
/usr/bin/pm2 stop all
/usr/bin/pm2 delete all

cd $APPS_DIR
/usr/bin/pm2 start