#!/bin/bash

# Instalar Git
sudo yum install -y git

# Instalar nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Cargar nvm en la sesión actual
. ~/.nvm/nvm.sh

# Instalar Node.js versión 18.18.0
nvm install 18.18.0

# Instalar PM2 globalmente usando npm
npm install pm2@latest -g

# Configurar PM2 para iniciar automáticamente al arrancar el sistema
pm2 startup