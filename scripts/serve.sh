#!/bin/bash

# Descargar los últimos cambios de la rama "develop"
git pull origin develop

# Actualiza los modulos de node
npm install

# Generar código de producción
npx nx run webapp:build

pm2 stop main
pm2 delete main

pm2 start ./dist/apps/webapp/npm --name "main" -- start
