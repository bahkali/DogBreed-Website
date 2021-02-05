
from flask import Flask
from flask_cors import CORS
import base64
import numpy as np
import io
from PIL import Image
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential, load_model
from keras.models import load_model
from tensorflow.keras.application import image
from flask import request
from flask import jsonify


# Get the Model
""" get the model and make it global variable """
def get_model():
    global model
    model = load_model('')
    print('Model loaded!')

# Decode the file receive.
def decodeImage(file):
    decode = base64.b64encode(file)
    decode_image = Image.open(io.BytesIO(decode))
    return decode_image

# Preprocess Image function for the model
def preprocess_imag(imagefile):
    """
    Take image and the desire size
    It has to check the image format 
    Turn to the desire size
    Turn it to numpy array and expand
    """
    img = image.load_img(imagefile, target_size=(224,224))
    img_array = image.img_to_array(img)
    preprocessImage = np.expand_dims(x, axis=0)
    return preprocessImage



def create_app(test_config=None):
    app = Flask(__name__)
    # CORS(app)
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
        response.headers.add('Access-Control-Allow-Origin', "*")
        response.headers.add('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE,OPTIONS')
        return response
    
    @app.route('/api/predict', methods=['GET'])
    def get_predict():
        return {'msg':'Hello'}


    @app.route('/api/uploadPredict', methods=['GET','POST'])
    def image_upload():
        try:
            uploaded_file = request.files['image']
            # encoded_img = uploaded_file['image']
            print(uploaded_file)
            
            # if uploaded_file.filename != '':
            #     print(uploaded_file)
            #prediction after the receiving the data
            # {
            #     'prediction': "Interesting",
            #     'percentage': 105
            #     } 
            return { 'encoded': uploaded_file}

    return app

    

    