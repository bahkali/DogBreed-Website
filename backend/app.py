
from flask import Flask
from flask_cors import CORS
import base64
import numpy as np
import io
from PIL import Image
import tensorflow as tf
from tensorflow import keras
# from tensorflow.keras.models import Sequential, load_model
# from keras.models import load_model
from tensorflow.keras.application import image
from flask import request
from flask import jsonify


# Get the Model
""" get the model and make it global variable """
# def get_model():
#     global model
#     model = load_model('')
#     print('Model loaded!')

# Preprocess Image function for the model
# def preprocess_imag(imagefile):
#     """
#     Take image and the desire size
#     It has to check the image format 
#     Turn to the desire size
#     Turn it to numpy array and expand
#     """
#     decode_image = Image.open(imagefile)
#     img = image.load_img(decode_image, target_size=(224,224))
#     
#     img_array = image.img_to_array(img)
#     preprocessImage = np.expand_dims(x, axis=0)
#     return preprocessImage



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
        uploaded_file = request.files['image']
        img = Image.open(uploaded_file)
        npimg = np.array(img)
        preprocessImage = np.expand_dims(npimg, axis=0)
        print(preprocessImage)
        return { 'encoded': 'success'}

    return app

    

    