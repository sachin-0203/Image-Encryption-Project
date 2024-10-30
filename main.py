from flask import Flask, request, jsonify, render_template, send_file
from cryptography.fernet import Fernet
from io import BytesIO
import base64

app = Flask(__name__)

# Route for the main page
@app.route('/')
def home():
    return render_template('index.html')

# Route for image encryption
@app.route('/encrypt', methods=['POST'])
def encrypt_image():
    # Check if an image file is provided
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files['image']
    image_data = image_file.read()

    # Generate a random encryption key
    key = Fernet.generate_key()
    fernet = Fernet(key)

    # Encrypt the image data
    encrypted_data = fernet.encrypt(image_data)

    # Convert encrypted data and key to base64 for easier transmission
    encrypted_image_b64 = base64.b64encode(encrypted_data).decode('utf-8')
    key_b64 = base64.b64encode(key).decode('utf-8')

    return jsonify({
        "encrypted_image": encrypted_image_b64,
        "key": key_b64
    })

# Route for image decryption
@app.route('/decrypt', methods=['POST'])
def decrypt_image():
    # Retrieve encrypted image and key from the form
    encrypted_image_b64 = request.form.get('encrypted_image')
    key_b64 = request.form.get('key')

    if not encrypted_image_b64 or not key_b64:
        return jsonify({"error": "Encrypted image or key is missing"}), 400

    # Decode the base64 encoded data
    encrypted_data = base64.b64decode(encrypted_image_b64)
    key = base64.b64decode(key_b64)

    # Initialize Fernet with the provided key
    fernet = Fernet(key)

    try:
        # Decrypt the image data
        decrypted_data = fernet.decrypt(encrypted_data)

        # Serve the decrypted image file
        return send_file(
            BytesIO(decrypted_data),
            mimetype='image/jpeg',
            as_attachment=True,
            download_name="decrypted_image.jpg"
        )
    except Exception as e:
        return jsonify({"error": "Failed to decrypt image. Check the key and encrypted data."}), 400

if __name__ == '__main__':
    app.run(debug=True)
