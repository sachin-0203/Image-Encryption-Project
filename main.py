from flask import Flask, render_template, request, send_file, jsonify
from cryptography.fernet import Fernet
import os
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encrypt', methods=['POST'])
def encrypt():
    if 'image' not in request.files:
        return "No image uploaded", 400

    file = request.files['image']
    image_data = file.read()

    # Generate a key for this encryption
    key = Fernet.generate_key()
    cipher = Fernet(key)

    # Encrypt the image data
    encrypted_image = cipher.encrypt(image_data)

    # Send encrypted image and key back to user
    response_data = {
        'encrypted_image': encrypted_image.decode('utf-8'),  # Convert bytes to string
        'key': key.decode('utf-8')  # Send the key as well
    }

    return jsonify(response_data)

@app.route('/decrypt', methods=['POST'])
def decrypt():
    try:
        # Get the encrypted image data and the decryption key from the form
        encrypted_image_data = request.form['encrypted_image']
        decryption_key = request.form['key']

        # Convert encrypted data and key back to bytes
        encrypted_image_data = encrypted_image_data.encode('utf-8')
        decryption_key = decryption_key.encode('utf-8')

        # Create cipher with the provided key
        cipher = Fernet(decryption_key)

        # Decrypt the image data
        decrypted_image_data = cipher.decrypt(encrypted_image_data)

        return send_file(
            io.BytesIO(decrypted_image_data),
            mimetype='image/png',
            as_attachment=True,
            download_name='decrypted_image.png'
        )
    except Exception as e:
        print(f"Error during decryption: {str(e)}")
        return f"Error during decryption: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)

