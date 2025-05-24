Creamos 2 carpetas "Frontend" y "Backend"
en terminal "cd backend"
"npm init -y" para crear el package.json
"npm i express@4.18.2"
"npm i nodemon -D" si es que no lo tenemos
creamos "server.js" punto de arranque
en package.json creamos:
  "scripts": {
    "dev": "nodemon server.js"
  },
  "type": "module",

refactorizamos lo que va en routes y en controllers
y hacemos carpeta src
modificamos el package.json para que:
  "main": "src/server.js",
  "dev": "nodemon src/server.js"

MONGODB
new proyect
create cluster
free plan + create deployment
copy password + create database user + choose a connection method
choose conection method + drivers

copiar el string de coneccion + done

network acces + add ip address + allow access from anywhere + confrim

npm i mongoose dotenv
creamos .env  con MONGODB_URI
agregamos el nombre de la tabla en la string de MONGODB_URI, antes de .../<nombre_tabla>?retry...

creamos src/config/db.js

creamos el modelo Note en src/models/Note.js

actualizamos los controllers

usamos postman / insomnia








