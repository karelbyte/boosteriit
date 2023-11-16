#!/bin/bash

# Descargar los últimos cambios de la rama "develop"
git pull origin develop

# Actualiza los modulos de node
npm install

# Generar código de producción
npx nx run webapp:build

pm2 stop main
pm2 delete main

root_dir=$(pwd)

cd ./dist/apps/webapp
pm2 start npm --name "main" -- start

cd $root_dir
