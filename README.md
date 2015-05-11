reserving Web APP
===========================

API REST de RESERVING
=====================

La API esta desarrollada utilizando **Symfony version 2.3** con ayuda del Bundle de terceros:

 1. [FOS Rest Bundle] (http://symfony.com/doc/master/bundles/FOSRestBundle/index.html): Nos proporciona un conjunto de herramientas que nos ayudará con la creación de nuestra **API REST** con **Symfony 2**.
 2. [Nelmio Api Doc Bundle] (https://github.com/nelmio/NelmioApiDocBundle/blob/master/Resources/doc/index.md): Nos ayuda a la generación de una **documentación par ala API**.
 3. [JMS Serializer Bundle](http://jmsyst.com/bundles/JMSSerializerBundle): Permite serializar los datos para entregarlos en formatos como: **XML**, **JSON** o **YML**.
 4. [Doctrine](http://www.doctrine-project.org/): Es el ORM que utilizaremos para la relación y mapeo de objetos.
 5. [Twig](http://twig.sensiolabs.org/): Sistema de plantilla utilizado, para renderizar código PHP en HTML.
 6. [SwiftmailerBundle](http://symfony.com/doc/current/reference/configuration/swiftmailer.html):



## Métodos HTTP permitidos

    |  Método |              Descripción                |
    |---------|-----------------------------------------|
    | `GET`   | Obtener un recurso o lista de recursos  |
    | `POST`  | Crear un recurso                        |
    | `PUT`   | Actualizar un recurso                   |
    | `DELETE`| Eliminar un recurso                     |

## Códigos de Respuesta
Listado de los códigos de respuesta que pueden ser usados en nuestra API REST.

    |  Código |                       Descripción                        |
    |---------|----------------------------------------------------------|
    |  `200`  | Success                                                  |
    |  `201`  | Success - Nuevo recurso creado.                          |
    |  `204`  | Success - No hay contenido para responder (DELETE)       |
    |  `400`  | Bad Request - i.e. Su solicitud no se pudo evaluar.      |
    |  `403`  | Unauthorized / Usuario no autenticado para este recurso. |
    |  `404`  | No Found / Recurso no existe                             |
    |  `422`  | Unprocessable Entity / i.e. error de validación          |
    |  `429`  | Limite de uso excedido, intente más tarde.               |
    |  `500`  | Error interno del servidor.                              |
    |  `503`  | Servicio no disponible.                                  |


## Formatos de Salida
La API entrega los recursos (datos) representados en los siguientes formatos:

1. JSON



## Tabla de rutas API REST

Las rutas de la api estrán a partir de **api.reserving.me**, esta será la ruta raiz desde donde empesaremos a entregar nuestros servicios. Esta **API estará versionada por la url**, de esta forma podemos trabajar en nuevas versiones sin afecta a la que este en producción. A continuación mostramos la tabla de rutas para cada uno de los recursos entregados.


## Servicios disponibles

 **CLIENTES**


 **AGENDAS**




 **EMPLEADOS**


 **SERVICIOS**


 **PRODUCTOS**
-

## WEBAPP - PANEL DE ADMINISTRACIÓN


## ROLES
- AdminCuenta 		: Accede a todas las agenda de la cuenta, crea empleados, productos y servicios.
- Administrativo	: Gestiona las agendas de los especialistas.
- Especialista		: Quien desarrolla el servicio, (sólo con acceso a su agenda).

CitaAdmin Es una aplicación que te permite gestionar las citas de tu empresa, desde esta aplicación además de las citas podrás gestiónar tus clientes, empleados, servicios y productos.


PANEL DE ADMINISTRACIÓN
==================================================
Servicios necesarios en el panel de administración.

ENTIDADES APLICACIÓN
	- Configuracion
	- Planes
	- Usuarios

APARTADOS CUENTA CLIENTE:
	- Configuracion
	- Usuarios/Empleados
	- Agendas
	- Servicios
	- Productos
	- Clientes

## WEB CORPORATIVA

Web Corporativa gestor de citas


La **web corporativa** del gestor de citas es la responsables de dar una buena impresión a los usuarios antes de entrar a la
aplicación, la web estará orientada a la venta de nuestro servicio principal: **"App gestor de citas"**.

La web está desarrollada utilizando las nuevas tegnología HTML5 & CSS3, utilizando las nuevas tendencias de diseño flat designs o diseño plano.

### Páginas o secciones de la web:

 1. **Inicio:** Página principal, donde se muestra de una forma clara el objetivo de nuestra Web App.
 2. **Servicios:** Información ampliada sobre nuestros los servicios que podemos ofrecer además de el uso del gestor de citas.
 3. **preguntas frecuentes:** Información detallada de cada una de las funcionalidades de la aplicación.
 4. **Planes y precios:** Detalle de las prestaciones de cada uno de los planes disponibles.
    4.1 Plan gratuito
    4.2 Plan Premium
    4.3 Plan Gold
- ** Login **:
- ** Registro **: Formulario de registro (PopUp) para el registro de nuevos clientes.