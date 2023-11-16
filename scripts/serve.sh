#!/bin/bash

# Obtén la ruta del directorio actual de trabajo
current_dir=$(pwd)

# Verifica si el directorio actual es el directorio raíz (contiene nx.json)
if [ -e "$current_dir/nx.json" ]; then
    echo "Este es el directorio raíz."
else
    echo "Este no es el directorio raíz. El script se detendrá."
    exit 1
fi

# Descargar los últimos cambios de la rama "develop"
git pull origin develop

# Actualiza los modulos de node
npm install

# Generar código de producción
npx nx run webapp:build

pm2 stop main
pm2 delete main

cd ./dist/apps/webapp
pm2 start npm --name "main" -- start

cd $current_dir
