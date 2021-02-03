from flask import Flask, jsonify

def create_app(test_config=None):
    app = Flask(__name__)
    
    @app.route('/test')
    def index():
        return {'msg':'Hello, World!'}
    return app