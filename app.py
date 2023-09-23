from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_mysqldb import MySQL
import pymysql, requests
from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
app = Flask(__name__)
mysql = MySQL(app)


app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "-----"
app.config["MYSQL_DB"] = "data_1"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"
 




"""
    Ruta de inicio de la aplicación.

    :return: Renderiza el template "index.html" con un mensaje a la conexión a la base de datos.
    :rtype: str

"""

@app.route("/")
def index():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT 1") 
        result = cursor.fetchone()
        mensaje = "Funcionando Correctamente"
    except Exception as e:
        mensaje = f"Error en la base de datos: {str(e)}"
    finally:
        cursor.close()

    return render_template("index.html", mensaje=mensaje)


"""
    Ruta para realizar autocompletado de ciudades de origen.

    :param str text: Texto de búsqueda.
    :return: Respuesta JSON con resultados de autocompletado.
    :rtype: dict
"""

@app.route("/autocompletadorOrigen", methods=["POST", "GET"])
def autocompletadorOrigen():
    buscador = request.form.get("text")
    cursor = mysql.connection.cursor()
    query = "SELECT DISTINCT iata FROM ciudades WHERE iata LIKE '{}%' LIMIT 6".format(buscador)
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)



"""
    Ruta para realizar autocompletado de ciudades de destino.

    :param str text: Texto de búsqueda.
    :return: Respuesta JSON con resultados de autocompletado.
    :rtype: dict

"""

@app.route("/autocompletadorDestino",methods=["POST","GET"])
def autocompletadorDestino():
    buscador = request.form.get("text")
    cursor = mysql.connection.cursor()
    query = "SELECT  DISTINCT iata FROM ciudades WHERE iata LIKE '{}%' LIMIT 6".format(buscador)
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)



"""
    Ruta para mostrar datos de acuerdo a la búsqueda.

    :param str num_ticket: Número de ticket a buscar.
    :param str ciudad_origen: Ciudad de origen a buscar.
    :param str ciudad_destino: Ciudad de destino a buscar.
    :return: Renderiza el template "mostrar_datos.html" con los resultados de la búsqueda.
    :rtype: str
"""
@app.route("/mostrar_datos", methods=["POST"])
def mostrar_datos():
    num_ticket = request.form.get("num_ticket")
    ciudad_origen = request.form.get("ciudad_origen")
    ciudad_destino = request.form.get("ciudad_destino")

    if num_ticket:
        cursor = mysql.connection.cursor()
        query = "SELECT * FROM tickets WHERE num_tickets = %s"
        cursor.execute(query, (num_ticket,))
        ticket_data = cursor.fetchone()
        cursor.close()

        if ticket_data:
            origen = ticket_data["origen"]
            destino = ticket_data["destino"]
            cursor = mysql.connection.cursor()
            query = "SELECT * FROM ciudades WHERE iata IN (%s, %s)"
            cursor.execute(query, (origen, destino))
            result = cursor.fetchall()
            cursor.close()
        else:
            result = None
    elif ciudad_origen and ciudad_destino:
        cursor = mysql.connection.cursor()
        query = "SELECT * FROM ciudades WHERE iata IN (%s, %s)"
        cursor.execute(query, (ciudad_origen, ciudad_destino))
        result = cursor.fetchall()
        cursor.close()
    else:
        result = None

    return render_template("mostrar_datos.html", datos=result)



"""
    Obtiene datos climáticos a partir de coordenadas geográficas.

    :param float latitud: Latitud de la ubicación.
    :param float longitud: Longitud de la ubicación.
    :return: Datos climáticos en formato JSON.
    :rtype: dict or None
"""

def obtener_datos_clima(latitud, longitud):
    url = 'https://api.openweathermap.org/data/2.5/weather'
    params = {
        'lat': latitud,
        'lon': longitud,
        'appid': '--------',
        'units': 'metric',
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return None




def actualizar_ciudades():
    """
    Actualiza los datos climáticos de las primeras 52 ciudades en la base de datos 'db_clima2'
    utilizando la API de OpenWeatherMap.

    La función obtiene las coordenadas de latitud y longitud de cada ciudad desde la base de datos
    y luego realiza solicitudes a la API de OpenWeatherMap para obtener los datos climáticos.
    Los datos climáticos se actualizan en la base de datos utilizando la función 'actualizar_ciudad_db'.

    Args:
        None

    Returns:
        None
    """
    ciudades = obtener_primeras_52_ciudades_desde_bd()
    for ciudad in ciudades:
        latitud = ciudad['latitud']  
        longitud = ciudad['longitud']
        api_key = '-------'

        url = f'https://api.openweathermap.org/data/2.5/weather?lat={latitud}&lon={longitud}&appid={api_key}&units=metric'
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()

            temperatura = data['main']['temp']
            clima_principal = data['weather'][0]['main']
            icono = data['weather'][0]['icon']
            descripcion_clima = data['weather'][0]['description']
            sentimiento = data['main']['feels_like']
            temperatura_max = data['main']['temp_max']
            temperatura_min = data['main']['temp_min']
            humedad = data['main']['humidity']
            velocidad_viento = data['wind']['speed']
            angulo_viento = data['wind']['deg']
            lluvia = data.get('rain', {}).get('1h', 0)
            nubes = data['clouds']['all']

            actualizar_ciudad_db(
                ciudad['iata'], 
                temperatura, 
                clima_principal, 
                icono, 
                descripcion_clima, 
                sentimiento, 
                temperatura_max, 
                temperatura_min, 
                humedad, 
                velocidad_viento, 
                angulo_viento, 
                lluvia, 
                nubes
            )
        else:
            print(f"Error al obtener datos de temperatura para latitud {latitud} y longitud {longitud}")


def actualizar_ciudad_db(iata, temperatura, clima_principal, icono, descripcion_clima, sentimiento, temperatura_max, temperatura_min, humedad, velocidad_viento, angulo_viento, lluvia, nubes):
    """
    Actualiza los datos de una ciudad en la base de datos 'db_clima2'.

    Args:
        iata (str): El código IATA de la ciudad que se actualizará.
        temperatura (float): La temperatura actual en grados Celsius.
        clima_principal (str): El clima principal en la ciudad.
        icono (str): El icono que representa el clima.
        descripcion_clima (str): Descripción detallada del clima.
        sentimiento (str): Sentimiento asociado al clima.
        temperatura_max (float): Temperatura máxima en grados Celsius.
        temperatura_min (float): Temperatura mínima en grados Celsius.
        humedad (float): Humedad en porcentaje.
        velocidad_viento (float): Velocidad del viento en metros por segundo.
        angulo_viento (float): Ángulo del viento en grados.
        lluvia (float): Cantidad de lluvia en milímetros.
        nubes (float): Porcentaje de cobertura de nubes.

    Returns:
        None
    """
    try:
        conexion = pymysql.connect(
            host='localhost',
            user='root',
            password='-----',
            database='data_1'
        )

        cursor = conexion.cursor()

        consulta_actualizar = """
            UPDATE ciudades 
            SET 
                temperatura = %s, 
                clima_principal = %s, 
                icono = %s, 
                descripcion_clima = %s, 
                sentimiento = %s, 
                temperatura_max = %s, 
                temperatura_min = %s, 
                humedad = %s, 
                velocidad_viento = %s, 
                angulo_viento = %s, 
                lluvia = %s, 
                nubes = %s
            WHERE iata = %s
        """

        valores = (
            temperatura, 
            clima_principal, 
            icono, 
            descripcion_clima, 
            sentimiento, 
            temperatura_max, 
            temperatura_min, 
            humedad, 
            velocidad_viento, 
            angulo_viento, 
            lluvia, 
            nubes, 
            iata
        )

        cursor.execute(consulta_actualizar, valores)

    
        conexion.commit()

     
        cursor.close()
        conexion.close()

        print(f"Datos actualizados para {iata}: temperatura={temperatura}°C, clima_principal={clima_principal}, icono={icono}, descripcion_clima={descripcion_clima}, sentimiento={sentimiento}, temperatura_max={temperatura_max}°C, temperatura_min={temperatura_min}°C, humedad={humedad}%, velocidad_viento={velocidad_viento} m/s, angulo_viento={angulo_viento}°, lluvia={lluvia} mm, nubes={nubes}%")
    except Exception as e:
        print(f"Error al actualizar datos para {iata}: {str(e)}")


def obtener_primeras_52_ciudades_desde_bd():
    """
    Esta función se encarga de obtener las primeras 52 ciudades desde una base de datos llamada 'db_clima2'.
    
    Returns:
        list: Una lista de diccionarios, donde cada diccionario representa una ciudad con sus datos.
              Cada diccionario contiene columnas de la tabla 'ciudades' como claves.
              Si ocurre un error, retorna una lista vacía.
    """
    try:
       
        conexion = pymysql.connect(
            host='localhost',
            user='root',
            password='------',
            database='data_1'
        )

      
        cursor = conexion.cursor()

       
        consulta = "SELECT * FROM ciudades LIMIT 52 "

        cursor.execute(consulta)

        columnas = [columna[0] for columna in cursor.description]
        ciudades = [dict(zip(columnas, fila)) for fila in cursor.fetchall()]

        cursor.close()
        conexion.close()

        return ciudades
    except Exception as e:
        print(f"Error al obtener las primeras 52 ciudades: {str(e)}")
        return []

if __name__ == "__main__":
    actualizar_ciudades()
    scheduler = BackgroundScheduler()
    scheduler.add_job(actualizar_ciudades, 'interval', minutes=3)
    scheduler.start()
    app.run()
