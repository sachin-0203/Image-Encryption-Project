
# Image Encryption Project


## Overview

- The Image Encryption Project is a Flask-based web application that allows users to upload images, encrypt them using cryptographic algorithms, and then decrypt the images with a key. The project demonstrates how to handle file uploads, encryption, and decryption using Python's Flask and Cryptography libraries.
## Features

#### Upload images through a simple web interface.

#### Encrypt the uploaded image using a symmetric key.

#### Download the encrypted image.

#### Decrypt the encrypted image by providing the correct key.

#### Simple and intuitive web-based user interface.

<img width="939" alt="Encryption Image" src="https://github.com/user-attachments/assets/c944f1b9-37c1-458b-abb7-bd205b0d5561">

## Technologies Used

 ### Flask (v2.1.1):
- A lightweight WSGI web application framework in Python used to build the backend and handle routing.

### Cryptography (v39.0.0): 
- A Python library that provides cryptographic recipes and primitives to encrypt and decrypt image data.

### HTML/CSS/JavaScript: 
- Frontend technologies to create the user interface for uploading and downloading images.

## How It Works

### 1. Image Upload and Encryption:

- The user uploads an image via the web interface.
- The server encrypts the image using the AES encryption algorithm from the cryptography library.

- A key is generated for encryption, and the encrypted image is available for download.

### 2. Image Decryption:

- The user uploads the encrypted image and enters the decryption key.
- The server decrypts the image and allows the user to download the decrypted image.


## Installation and Setup
 
### Prerequisites

#### ✔️Python 3.x installed on your machine.

#### ✔️Install Flask and cryptography using pip.

### Steps :

#### 1. Clone the Repository :

`git clone https://github.com/sachin-0203/Image-Encryption-Project.git`

#### 2. Navigate to the project directory :

`cd Image-Encryption-Project
`

#### 3. Create and activate a virtual environment (optional but recommended):

`python -m venv venv`

`venv\Scripts\activate   #On Windows`

#### 4. Install the required dependencies:
`pip install -r requirements.txt
`

#### 5.Run the Flask application:
`python main.py`

#### 5.Open your browser and navigate to http://127.0.0.1:5000/ to access the web interface.

## Dependencies
- Flask v2.1.1: Web framework used to create the server and handle HTTP requests.

- cryptography v39.0.0: Used to handle image encryption and decryption.

## Future Enhancements
- Add support for other file types (e.g., audio, video).
- Implement user authentication for enhanced security.
- Display encryption and decryption progress.

## Contributing
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


# Project Images

## Landing Page : 

<img width="939" alt="Landing Page" src="https://github.com/user-attachments/assets/eb7123ae-d56a-4faa-86e7-65bfad1431f3">

## Encryption Page  and  Decryption Page :
<img width="939" alt="Encryption and Decryption Page" src="https://github.com/user-attachments/assets/9d17122a-b2a9-40c8-b82c-e1ccdb373dcf">


## Encrypted the Image :
### this generate the Encrypted Image and a Decryption Key
<img width="939" alt="Encryption Process" src="https://github.com/user-attachments/assets/d2ac497a-7af1-4744-95a2-f4c47eedb5d5">

## Download the Encrypted Image : 
<img width="939" alt="Encrypted Image" src="https://github.com/user-attachments/assets/39d4e182-2339-4eda-bff2-5e0dc4185eb1">


## Decrypted the Image :

### There is a paste Tooltip for pasting the image and key
<img width="939" alt="Decryption Process" src="https://github.com/user-attachments/assets/c4622303-3814-4fb8-9a55-a3b0945b4a45">

### This take the Encrypted Image and Decrypted Key to generate the Original Image and Download it
<img width="939" alt="Decrypted Image" src="https://github.com/user-attachments/assets/a0f483ff-4e33-4125-b648-b7a27270bc14">






