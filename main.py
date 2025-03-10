import json
import random
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

SERVER = os.getenv('SMTP_SERVER')
PORT = os.getenv('SMTP_PORT')
USER = os.getenv('SMTP_USER')
PASSWORD = os.getenv('SMTP_PASSWORD')
RECEIVER = os.getenv('SMTP_RECEIVER')

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    user_data = {
        'user_name': request.form.get('full_name'),
        'user_email': request.form.get('email_address'),
        'user_mobile': request.form.get('mobile_number'),
        'email_subject': request.form.get('email_subject'),
        'user_message': request.form.get('your_message')
    }

    send_confirmation_email(user_data)

    return '', 204

def send_confirmation_email(user_data):
    subject = "🎉 Someone Looking For You! 🕵️‍♂️"
    
    html_content = render_template('thankyou.html', **user_data)

    sender_email = user_data['user_email']
    receiver_email = RECEIVER

    message = MIMEMultipart()
    message["From"] = f"HariDigiCV <{sender_email}>"
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(MIMEText(html_content, "html"))

    smtp_server = SERVER
    smtp_port = PORT
    smtp_username = USER
    smtp_password = PASSWORD

    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(sender_email, receiver_email, message.as_string())
            print("Email sent successfully.")
    except Exception as e:
        print(f"Error sending email: {e}")

if __name__ == '__main__':
    options = {
        'request_timeout': 120
    }
    app.run(debug=True, threaded=True, host='0.0.0.0', port=8080, **options)