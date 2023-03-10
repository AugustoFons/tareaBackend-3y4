# Backend - Tarea de Rutas 3

## Crear y conectar una base de datos a un servidor con express:

- Crear un cluster en https://www.mongodb.com/es/cloud/atlas/efficiency


- Crear para dicho cluster un usuario y contraseña, darle accesos de ip en el código.


- El proyecto tiene que tener instalado mongoose.


- El proyecto debe contar con dos rutas un GET /ver y POST /crear.


- El proyecto debe  tener la función necesaria para conectarse al cluster.


- El esquema tiene que ser de una farmacia y tiene que cumplir con los siguientes parámetros:
  tener un atributo obligatorio,
tener dos atributos tipo Number,
contar con los campos strings que sean necesarios ( a elección ),
tener un campo booleano.

# Backend - Tarea de Rutas 4

## Para esta tarea se tienen que agregar rutas con los siguientes métodos:

- Una ruta con el método PUT la cual actualice el modelo según su ID y reciba la información a actualizar por BODY


- Una ruta con el método DELETE que borre un contenido de nuestro modelo según su ID.


## También tendremos que implementar validaciones:

- Implementar express-validator para los casos de POST y PUT


- Crear un middleware que verifique si el ID ingresado es correcto y implementarlo para PUT y DELETE


