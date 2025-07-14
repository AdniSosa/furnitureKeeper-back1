**APLICACIÓN WEB FURNI**

![Logo de Furni](public/image/logoFurni.png) <!-- <img src="public/image/logo.png" alt="Logo tienda de ropa" width="200"/> -->


## ÍNDICE
*[Descripción del proyecto](#Descripción-del-proyecto)
*[Funcionalidades del proyecto](#Funcionalidades-del-proyecto)
*[Tecnologías utilizadas](#Tecnologías-utilizadas)
*[Características de archivos](#Características-de-los-archivos)
*[Base de datos](#Base-de-datos)
*[Servidor](#Servidor)
*[Modelos](#Modelos)
*[Rutas](#Rutas)
*[Controladores](#Controladores)
*[Despliegue](#Despliegue)
<!--*[Firebase](#Firebase)-->
*[Autor](#Autor)

## Descripción del proyecto
Aplicación web para guardar muebles favoritos de cara a una mudanza o una reforma, donde los usuarios pueden  guardar los muebles por habitación o estancia, con su foto, medidas, tienda, url (si hay), precio, fecha de creación y comentario. Se puede filtrar por favoritos, habitación y tienda. En la aplicación los usuarios podrán gestionar cada mueble: crear, editar o borrar cualquier artículo.

## Funcionalidades del proyecto

### Funcionalidades para el usuario

Estas son las funcionalidades de las que el usuario de la página web podrá hacer uso:

- `visualización de los artículo filtrados por habitación o estancia`: Permite una visión rápida de todos los muebles filtrados según el lugar donde estarán ubicados en la casa.
- `visualización de los artículo filtrados por tienda`: Permite una visión rápida de todos los muebles filtrados según la tienda de compra.
- `visualización de los artículo filtrados por favoritos`: Permite una visión rápida de todos los muebles clasificados como favoritos.
<!-- - `Ver detalles del servicio`: Permite visualizar todos los detalles del artículo haciendo click en "Más información". -->
- `Creación de nuevo artículo`: Permite crear un nuevo artículo, introduciendo valores como nombre, foto, habitación, precio, medidas, url de la imágen, favorito y comentario. 
- `Editar un artículo`: Permite editar todos los campos rellenados en la creación del artículo. 
- `Borrar un artículo`: Borra cualquier artículo.

## Tecnologías utilizadas

- **Node.js** – Entorno de ejecución para JavaScript en el servidor.
- **Express.js** – Framework minimalista para crear la API REST.
- **MongoDB** – Base de datos NoSQL.
- **Mongoose** – ODM que facilita la interacción con MongoDB desde Node.js.
<!-- - **Firebase Admin SDK** – Permite validar tokens y gestionar usuarios desde el backend.-->
- **dotenv** – Carga de variables de entorno desde un archivo `.env`.
- **cors** – Middleware para habilitar el intercambio de recursos entre distintos orígenes.
<!--- **cookie-parser** – Middleware para manejar cookies en peticiones HTTP.-->


## Característica de los archivos

### 📁 controllers
<!-- - controllers/authControllers.js: Archivo que contiene la configuración de firebase y la lógica para manejar tanto la creación de usuario, como el registro, inicio y cierre de sesión del administrador utilizando Firebase.-->
- controllers/ServicesControllers.js: Archivo que contiene la lógica para manejar las solicitudes CRUD de los servicios.

### 📁 routes
- routes/servicesRoutes.js: Archivo que contiene la definición de las rutas CRUD para los servicios. Este llama a los métodos del controlador.
<!-- - routes/authRoutes.js: Archivo que contiene la definición de las rutas para la autenticación. Este llama a los métodos del controlador.-->

### 📁 models
- Contiene el modelo de la bbdd. 

<!--### 📁 middlewares
- middlewares/verifyToken.js: Archivo que contiene el middleware para comprobar si el usuario está autenticado. Este busca la sesión del usuario y, si no la encuentra, redirige al formulario de login.-->

### 📄 index.js
- Configura Express, conecta con MongoDB y lanza el servidor.

### 📄 .env
- Archivo que contendrá las variables de entorno. 

### 📄package.json
- package.json: Archivo que contendrá las dependencias del proyecto. Se debe hacer ```npm i``` para instalar todas las dependencias necesarias para que el proyecto funcione. Se debe utilizar npm start para iniciar el servidor.


## Base de datos

La base de datos se gestiona mediante MongoDB Atlas.

Una vez creada la base de datos, copiamos la uri y la guardamos en el archivo .env

MONGO_URI=<uri_bd_atlas>

## Modelos

### Furniture

- Nombre, tipo String
- Precio, tipo Number
- Imagen, tipo String
- Habitación ('Cocina', 'Dormitorio', 'Salón', 'Comedor', 'Recibidor', 'Baño', 'Otro'), tipo STRING
- Tienda, tipo String
- URL, tipo String,
- Tamaño: ancho tipo Number, alto tipo Number y profundo tipo Number.
- Favorito, tipo Boolean
- Comentario, tipo String


## Rutas 

<!-- POSTMAN:  https://documenter.getpostman.com/view/40898562/2sB2cVe22t-->

### furnitureRoutes

- `GET /`: Devuelve todos los muebles con su detalle.
- `GET /create`: Muestra el formulario para crear un nuevo artículo.
- `GET /favorites`: Muestra los muebles marcados como favoritos.
- `GET /furniture/:_id`: Trae la info del mueble seleccionado o buscado.
- `GET /furnitures/:room`: filtra los muebles por estancia.
- `POST /create`: Crea un nuevo artículo guardándolo en la base de datos.
- `PUT /furniture/:_id`: Busca el mueble por su id, y lo actualiza o modifica.
- `DELETE /furniture/:_id`: Elimina un artículo de la lista de muebles.


<!--### Auth

- `POST /register`: Registro de usuario para continuar al login.

- `POST /login`: Comprobación de auténticación para continuar al /admin.

- `POST /logout`: Cierra sesión.-->

## Controladores

### 📄 ServicesControllers.js

- `createFurniture`: Crea un nuevo artículo con los datos que se pasan en el body (POST).
<!-- - `getAll`: Devuelve todos los muebles existentes en la base de datos. -->
- `getFurnitures`: Devuelve todos los muebles buscados por estancia. <!--Esto revisarlo -->
- `getFurniture`: Devuelve la info de un artículo buscado por su ID. 
- `getFavorites`: Devuelve todos los muebles marcados como favoritos.
- `updateFurniture`: Permite modificar/actualizar un mueble buscado por su ID.
- `deleteFurniture`: Elimina un mueble por ID.

<!-- ### 📄 authControllers.js

- `registerPost`: Envío de datos del administrador para crear una cuenta de usuario.

- `loginPost`: Comprobación de auténticación para continuar al dashboard.

- `logoutPost`: Cierre de sessión. -->

## Servidor

Este servidor está construido con Node.js y Express, y gestiona:

- Levantamos el servidor npm start.

<!-- - Autenticación con Firebase.-->

- Conexión y operaciones con la base de datos MongoDB (a través de Mongoose).

- Rutas para obtener muebles.

<!-- - Middleware para el manejo de cookies, JSON y formularios.-->

- CORS configurado para permitir la conexión desde el frontend.


## Despliegue

<!-- Despliegue del backend en Render  https://proyect-break-3-back.onrender.com


## Firebase

Utilizamos firebase-admin para:

- Registrar o crea nuevos usuarios (createUser), con correo electrónico y contraseña.

- Verifica al usuario, guarda el token en las cookies y le da acceso a las rutas del administrador.

- Para hacer cierre de sesión, borra el token de las cookies.-->


## Autor

[Adni Sosa](https://github.com/AdniSosa)