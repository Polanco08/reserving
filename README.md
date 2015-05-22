reserving Web APP
===========================

### 1.API REST FUll RESERVING

La API esta desarrollada utilizando **Symfony version 2.3**:

Para el desarrollo de la misma, he utilizado los siguientes Bundle desarrollados por el equipo de desarrollo de symfony, gracias a estos Bundle podemos tener implementada una API rest en un tiempo reducido, si lo comparamos con un desarrollo propio que podemos tardar meses en crearlo.

 1. [FOS Rest Bundle] (http://symfony.com/doc/master/bundles/FOSRestBundle/index.html): Proporciona conjunto de herramientas para la creación de [**API REST**](http://es.wikipedia.org/wiki/Representational_State_Transfer) con [**Symfony 2**](https://symfony.com/).
 2. [FOSUserBundle](https://github.com/FriendsOfSymfony/FOSUserBundle): Proporcina un sistema robusto de usuarios, con opciones avanzadas.
 2. [Nelmio Api Doc Bundle] (https://github.com/nelmio/NelmioApiDocBundle/blob/master/Resources/doc/index.md): Nos ayuda a la generación de una **documentación par ala API**.
 3. [JMS Serializer Bundle](http://jmsyst.com/bundles/JMSSerializerBundle): Permite serializar los datos para entregarlos en formatos como: **XML**, **JSON** o **YML**.
 4. [Doctrine](http://www.doctrine-project.org/): Es el ORM que utilizaremos para la relación y mapeo de objetos.
 5. [Twig](http://twig.sensiolabs.org/): Sistema de plantilla utilizado, para renderizar código PHP en HTML.
 6. [SwiftmailerBundle](http://symfony.com/doc/current/reference/configuration/swiftmailer.html):

Esta API es [RESFULL](http://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages) tiene permitido los siguientes Métodos HTTP para todos sus recursos.


## Tabla de contenido
1. [Métodos HTTP permitidos](#métodos-http-permitidos)


## Métodos HTTP permitidos
  Método | Descripción
-------- | -----------------------------------------
`GET`    | Obtener un recurso o lista de recursos
`POST`   | Crear un recurso
`PUT`    | Actualizar un recurso
`DELETE` | Eliminar un recurso

## Códigos de Respuesta
Listado de los códigos de respuesta que pueden ser usados en nuestra API REST.

  Código |                       Descripción                        
---------|----------------------------------------------------------
  `200`  | Success                                                  
  `201`  | Success - Nuevo recurso creado.                          
  `204`  | Success - No hay contenido para responder (DELETE)       
  `400`  | Bad Request - i.e. Su solicitud no se pudo evaluar.      
  `401`  | Unauthorized / Usuario no autenticado para este recurso. 
  `404`  | No Found / Recurso no existe                             
  `422`  | Unprocessable Entity / i.e. error de validación          
  `429`  | Limite de uso excedido, intente más tarde.               
  `500`  | Error interno del servidor.                              
  `503`  | Servicio no disponible.                                  



## Formatos de Salida
La API entrega los recursos (datos) representados en los siguientes formatos:

1. JSON

Tenemos habilitado sólo el formato JSON, pero en cualquier momento de una forma sencilla, podemos habilitar otros formatos disponibles.


## Tabla de rutas API REST

Las rutas de la api estrán a partir de **api.v1.reserving.com.es**, esta será la ruta raiz desde donde empesaremos a entregar nuestros servicios. Esta **API estará versionada por la url**, de esta forma podemos trabajar en nuevas versiones sin afecta a la que este en producción. A continuación mostramos la tabla de rutas para cada uno de los recursos entregados.

URL Base de todos los recursos: http://api.reserving.me/

Documentación de cada recurso: http://api.reserving.me

 **CITAS**

       RECURSO URI         |           GET         |        PUT         |        POST        |      DELETE        
---------------------------|-----------------------|--------------------|--------------------|--------------------
  `/v1/citas/`             | listado de citas      |        ---         |        ---         |       ---          
  `/v1/citas/{id}`         |   Detalle cita        | Actualiza una Cita |    Nueva cita      |  Elimina una cita  
   

 **CLIENTES**


       RECURSO URI         |           GET         |        PUT         |        POST        |      DELETE        
---------------------------|-----------------------|--------------------|--------------------|--------------------
  `/v1/clientes/`          | listado de clientes   |        ---         |        ---         |       ---          
  `/v1/clientes/{id}`      |   Detalle cliente     | Actualiza un Clie. |    Nuevo Clie.     |  Elimina un Clie.  


**EMPLEADOS**


       RECURSO URI         |           GET         |        PUT         |        POST        |      DELETE        
---------------------------|-----------------------|--------------------|--------------------|--------------------
  `/v1/empleados/`         | listado de empleados  |        ---         |        ---         |       ---          
  `/v1/empleados/{id}`     |   Detalle empleado    | Actualiza un Empl. |    Nuevo Empl.     |  Elimina un Empl.  


**SERVICIOS**

       RECURSO URI         |           GET         |        PUT         |        POST        |      DELETE        
---------------------------|-----------------------|--------------------|--------------------|--------------------
  `/v1/servicios/`         | listado de servicios  |        ---         |        ---         |       ---          
  `/v1/servicios/{id}`     |   Detalle servicio    | Actualiza un serv. |    Nuevo Serv.     |  Elimina un Serv.  
