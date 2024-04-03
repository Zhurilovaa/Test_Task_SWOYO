from flask import Flask
import flask
import json
import random
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello():
    random.seed()
    result = str(random.randint(5,51))
    return result

@app.route('/number', methods=["GET"])
def users():
    print("numbers endpoint reached...")
    with open("result.json", "r") as f:
        data = json.load(f)
        random.seed()
        result = str(random.randint(5,51))
        data.append({
            "sizeList": str(result)
        })
        return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 6969)