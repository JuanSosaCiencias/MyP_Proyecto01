from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_mysqldb import MySQL
import requests
app = Flask(__name__)
mysql = MySQL(app)


app.config["MYSQL_HOST"] = "----"
app.config["MYSQL_USER"] = "----"
app.config["MYSQL_PASSWORD"] = "-----"
app.config["MYSQL_DB"] = "-----"
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
    query = "SELECT DISTINCT origin FROM dataset WHERE origin LIKE '{}%' LIMIT 6".format(buscador)
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
    query = "SELECT  DISTINCT destination FROM dataset WHERE destination LIKE '{}%' LIMIT 6".format(buscador)
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

    cursor = mysql.connection.cursor()
    if num_ticket:
        query = "SELECT * FROM dataset WHERE num_ticket = '{}'".format(num_ticket)
    elif ciudad_origen and ciudad_destino:
        query = "SELECT * FROM dataset WHERE origin = '{}' AND destination = '{}'".format(ciudad_origen, ciudad_destino)
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()


    if not result:
        mensaje_error = "No se encontraron resultados para la búsqueda."
        return render_template("index.html", mensaje_error=mensaje_error)

    for row in result:
        latitud_origen = float(row["origin_latitude"])
        longitud_origen = float(row["origin_longitude"])
        clima_origen = obtener_datos_clima(latitud_origen, longitud_origen)
        if clima_origen:
            row["temperatura_origen"] = clima_origen["main"]["temp"]
            row["humedad_origen"] = clima_origen["main"]["humidity"] 
        else:
            row["temperatura_origen"] = "No disponible"
            row["humedad_origen"] = "No disponible"


        latitud_destino = float(row["destination_latitude"])
        longitud_destino = float(row["destination_longitude"])
        clima_destino = obtener_datos_clima(latitud_destino, longitud_destino)
        if clima_destino:
            row["temperatura_destino"] = clima_destino["main"]["temp"]
        else:
            row["temperatura_destino"] = "No disponible"

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
        'appid': '------',
        'units': 'metric',
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return None







if __name__ == "__main__":
    app.run(debug=True)