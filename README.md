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

1. `index.html`: Esta plantilla se utiliza para recopilar información de los usuarios a través de un formulario.
2. `mostrar_datos.html`: Aquí se muestran los resultados de las búsquedas y datos meteorológicos.

## Requisitos

Asegúrate de tener instalados los siguientes requisitos en tu sistema:

- Python 3
- pip (administrador de paquetes de Python)
- MySQL (base de datos)
- Cuenta de OpenWeatherMap API y su clave de API

## Uso
Para ejecutar la aplicación, se tiene que descargar Python y Flask instalados. Luego, sigue estos pasos:

1. Clona el repositorio desde la terminal:

```bash
   $ git clone https://github.com/JuanSosaCiencias/MyP_Proyecto01.git
```

2. Crear un entorno virtual desde la carpeta del proyecto:

```bash
    $ cd MyP_Proyecto01
    $ python -m venv venv
```
3. Activar el entorno virtual desde la carpeta del proyecto:

```bash
    $ venv \ Scripts \ activate  ó  source venv/bin/activate 
```

4. Instalar las dependencias del proyecto: `requirements.txt`

```bash
    $ pip install -r requirements.txt
```

5. Instalar BackgroundScheduler:

```bash
    $ pip install apscheduler
```

5. Importar la base de datos `db_clima2.sql` desde tu BD preferida.

6. Configura la base de datos: 
    Desde el archivo `app.py` agrega la configuració de la base de datos:

        app.config["MYSQL_HOST"] = "localhost"
        app.config["MYSQL_USER"] = "root"
        app.config["MYSQL_PASSWORD"] = "tucontraseña"
        app.config["MYSQL_DB"] = "db_clima"

        ESTÄS APARECERAN EN LAS LÍNEAS DE CÓDIGO: 10, 238 y 306  

7. Agregar la clave de la API de OpenWeatherMap:

``` python
     api_key = '-----' (Linea de codigo: 142, 208)
```


## Pasos para ejecutar la página:
- Asegurate de que su base de datos este en funcionamiento
- Ejecutar la aplicación Flask:
    python app.py
Esto ejecutara un 'http://localhost:5000', esto lo tendras que abir desde tu navegador


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

## Documentación: 

- Python: https://docs.python.org/
- Flask: https://flask.palletsprojects.com/ 
- https://dev.mysql.com/doc/connector-python/en/










