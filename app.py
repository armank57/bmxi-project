from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS
from flask import request,jsonify
from flask_socketio import SocketIO,emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

clients = []

# Send HTML!
@app.route('/')
def root():    
    return render_template('index.html')

@socketio.on('connect')
def connected():
    clients.append(request.sid)

@socketio.on('disconnect')
def connected():
    clients.remove(request.sid)

# Receive a message from the front end HTML
@socketio.on('send_message')   
def message_recieved(data):
    print(data['text'])
    print(clients)
    emit('message_from_server', {'text': data['text']}, to=clients[0])

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0")