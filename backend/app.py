from flask import Flask, jsonify
from flask_cors import CORS


def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)
    # cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
        response.headers.add('Access-Control-Allow-Methods', 'GET,POST')
        return response
    
    @app.route('/predict', methods=['GET'])
    def get_predict():
        return {'msg':'Hello'}

    return app