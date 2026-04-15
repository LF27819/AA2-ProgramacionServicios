# Usamos Node
FROM node:20

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto
EXPOSE 3000

# Arrancamos la app
CMD ["npm", "run", "start:dev"]