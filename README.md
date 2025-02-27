# 📦 Backend - Gestión de Empresas

Este es el backend de la plataforma de gestión de empresas, prospectados y cartera. Construido con **Node.js**, **Express** y **MySQL**, y desplegado en **Docker**.

## 🚀 Tecnologías Utilizadas

- **Node.js** + **Express.js** - Para manejar la lógica del servidor.
- **MySQL** - Base de datos relacional para almacenar la información.
- **Docker** - Para contenerizar la aplicación y facilitar su despliegue.
- **Git** - Para control de versiones y colaboración.



## ⚙️ Configuración

### 1️⃣ Clonar el Repositorio

```sh
git clone https://github.com/Donpirro/BackCreditos.git
cd backend

### 2️⃣ Configurar Variables de Entorno
Crear un archivo .env en la raíz 


### 3️⃣ Instalar Dependencias
npm install


### 4️⃣ Iniciar el Servidor
npm start


El backend correrá en http://localhost:3000.

📌 Endpoints Principales
🔹 Autenticación
POST /api/auth/login - Iniciar sesión.
🔹 Empresas
GET /api/empresas - Obtener todas las empresas.
GET /api/empresas/:nit - Buscar empresa por NIT.
🔹 Cartera
GET /api/cartera/:empresaId - Obtener cartera de una empresa.
🔹 Prospectados
GET /api/prospectados/:empresaId - Obtener prospectados de una empresa.