# 🧩 Discord Backend API

API REST desarrollada con NestJS que simula el funcionamiento básico de una aplicación tipo Discord, permitiendo la gestión de usuarios, servidores, canales y mensajes.

---

## 🚀 Tecnologías utilizadas

* **Node.js**
* **NestJS**
* **TypeORM**
* **PostgreSQL**
* **JWT (Autenticación)**
* **Docker & Docker Compose**
* **Swagger (Documentación)**
* **Class-validator (Validación de datos)**

---

## 📦 Funcionalidades principales

* Gestión completa de:

  * Usuarios
  * Servidores
  * Canales
  * Mensajes

* Sistema de autenticación:

  * Registro de usuarios
  * Login con JWT
  * Protección de rutas mediante Guards

* Validación de datos en las peticiones

* Relaciones entre entidades:

  * Un servidor tiene un owner
  * Un servidor tiene varios canales
  * Un canal tiene varios mensajes

---

## 🔐 Control de permisos

Se ha implementado un sistema básico de roles:

* Solo el **owner del servidor** puede eliminar los canales asociados a ese servidor
* Si otro usuario intenta hacerlo → **403 Forbidden**

---

## 📊 Logs y monitorización

Se ha implementado un middleware global que registra:

* Método HTTP
* Ruta
* Código de estado
* Tiempo de respuesta

Ejemplo:

```
[POST] /servidores - 201 - 34ms
```

---

## 📚 Documentación (Swagger)

La API cuenta con documentación interactiva disponible en:

```
http://localhost:3000/api/docs
```

Desde Swagger se pueden:

* Ver todos los endpoints
* Probar peticiones
* Introducir token JWT para rutas protegidas

---

## ⚙️ Ejecución en local

### 1. Instalar dependencias

```
npm install
```

### 2. Levantar base de datos

```
docker compose up db -d
```

### 3. Ejecutar la aplicación

```
npm run start:dev
```

---

## 🐳 Ejecución con Docker

### Levantar todo el sistema

```
docker compose up --build
```

Esto iniciará:

* Backend (NestJS)
* Base de datos PostgreSQL

---

## 🔑 Autenticación

### Registro

```
POST /autenticacion/registro
```

### Login

```
POST /autenticacion/login
```

Devuelve un `access_token` que debe usarse en:

```
Authorization: Bearer TOKEN
```

---

## 📌 Endpoints principales

### Usuarios

* `GET /usuarios`
* `GET /usuarios/:id`
* `POST /usuarios`
* `PUT /usuarios/:id`
* `DELETE /usuarios/:id`

### Servidores

* `GET /servidores`
* `POST /servidores`
* `PUT /servidores/:id`
* `DELETE /servidores/:id`

### Canales

* `GET /canales`
* `POST /canales`
* `PUT /canales/:id`
* `DELETE /canales/:id`

### Mensajes

* `GET /mensajes`
* `POST /mensajes`

---

## 🧪 Pruebas

Se pueden realizar pruebas mediante:

* Swagger (`/api/docs`)
* Postman

---

## 🏁 Estado del proyecto

✔ API funcional
✔ Autenticación con JWT
✔ Validación de datos
✔ Docker funcionando
✔ Swagger documentado
✔ Logs implementados
✔ Control de permisos básico
