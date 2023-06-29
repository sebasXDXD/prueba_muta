Este archivo proporciona una breve documentación sobre cómo iniciar el proyecto en Node.js con Express y enumera las dependencias utilizadas en el proyecto.

Iniciar el proyecto
Para iniciar el proyecto, siga los siguientes pasos:

Asegúrese de tener Node.js instalado en su máquina.
Clone este repositorio en su entorno local.
Abra una terminal en la carpeta raíz del proyecto.
Modo de desarrollo
En modo de desarrollo, puede utilizar nodemon para reiniciar automáticamente el servidor cada vez que se realicen cambios en el código. Ejecute el siguiente comando:
npm run dev
Esto iniciará el proyecto utilizando nodemon y ejecutará el archivo src/index.js.

Modo de producción
En modo de producción, puede utilizar el siguiente comando para iniciar el proyecto:
npm start
Esto iniciará el proyecto utilizando Node.js y ejecutará el archivo src/index.js.

El proyecto esta en la carpeta src ahi puede observar todos los controladores modelos y rutas del mismo incluyendo la base de datos 

Dependencias utilizadas
El proyecto utiliza las siguientes dependencias:

async-connect-flash: ^1.0.5
bcrypt: ^5.1.0
bcryptjs: ^2.4.3
cookie-parser: ^1.4.6
cors: ^2.8.5
dotenv: ^16.3.1
express: ^4.18.2
express-sesssion: ^1.15.5
jsonwebtoken: ^9.0.0
morgan: ^1.10.0
mysql2: ^3.4.2
timeago.js: ^4.0.2
zod: ^3.21.4
Estas dependencias se pueden instalar utilizando el comando npm install.

