# Aplicación de Clima

## Integrantes del Equipo
* Barrientos Sánchez José Antonio 423019269
* Morales Chaparro Gael Antonio - 320076972
* Sosa Romo Juan Mario - 320051926
* Pastor De La Cruz Miguel - 320125537

## Descripción
Esta es una aplicación web desarrollada con Flask que permite a los usuarios buscar información el clima en las ciudades de origen y destino. La aplicación se conecta a una base de datos MySQL y utiliza la API de OpenWeatherMap para obtener datos meteorológicos en tiempo real.

## Estructura de Carpetas
El proyecto se organiza en las siguientes carpetas:

### static
Esta carpeta contiene los archivos estáticos utilizados para la interfaz de usuario de la página web, como hojas de estilo CSS, imágenes y JavaScript.

### templates
En esta carpeta se encuentran los archivos HTML que conforman las páginas web de la aplicación. Hay dos plantillas principales:

1. `formulario.html`: Esta plantilla se utiliza para recopilar información de los usuarios a través de un formulario.
2. `mostrar_datos.html`: Aquí se muestran los resultados de las búsquedas de vuelos y datos meteorológicos.

## Uso
Para ejecutar la aplicación, se tiene que descargar Python y Flask instalados. Luego, sigue estos pasos:

1. Configurar la base de datos MySQL y que la configuración en `app.py` coincida con la del servidor de la Base de Datos.
2. Ejecuta `app.py` utilizando el comando `python app.py`.
3. Abre un navegador web y ve a la dirección `http://localhost:5000` para acceder a la aplicación.

## Funcionalidades Principales
La aplicación ofrece las siguientes funcionalidades:

- Búsqueda de clima por número de ticket.
- Búsqueda de clima por ciudad de origen y destino.
- Visualización de datos meteorológicos en tiempo real de las ciudades de origen y destino.

## Dependencias Externas
La aplicación utiliza las siguientes dependencias externas:

- Flask: Framework web de Python.
- Flask-MySQLdb: Extensión para la conexión a base de datos MySQL.
- Requests: Biblioteca para realizar solicitudes HTTP a la API de OpenWeatherMap.

## API de OpenWeatherMap
Para obtener datos meteorológicos, la aplicación se conecta a la API de OpenWeatherMap. Debes proporcionar tu propia clave de API en el archivo `app.py` para que funcione correctamente.










# Roles de trabajo

* Gael y Antonio. Trabajar en el Frontend 
* Mike y Mario. Trabajar en el Backend
