from flask import Flask,render_template,request,jsonify
from flask_mysqldb import MySQL
app = Flask(__name__)
mysql = MySQL(app)


app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "m26p12c04"
app.config["MYSQL_DB"] = "db_clima"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

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

@app.route("/autocompletador",methods=["POST","GET"])
def autocompletador():
    buscador = request.form.get("text")
    cursor = mysql.connection.cursor()
    query = "select num_ticket from dataset where num_ticket LIKE '{}%' Limit 10".format(buscador)
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)

@app.route("/autocompletadorOrigen",methods=["POST","GET"])
def autocompletadorOrigen():
    buscador = request.form.get("text")
    cursor = mysql.connection.cursor()
    query = "select origin from dataset where origin LIKE '{}%' Limit 10".format(buscador)
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)

@app.route("/autocompletadorDestino",methods=["POST","GET"])
def autocompletadorDestino():
    buscador = request.form.get("text")
    cursor = mysql.connection.cursor()
    query = "select destination from dataset where destination LIKE '{}%' Limit 10".format(buscador)
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)




if __name__ == "__main__":
    app.run(debug=True)