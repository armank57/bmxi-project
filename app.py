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
    return render_template('clientHostJoin.html')

@app.route('/clientLoading')
def clientLoading():    
    return render_template('clientLoading.html')

@app.route('/clientPlaying')
def clientPlaying():    
    return render_template('clientPlaying.html')

@app.route('/hostJoin')
def hostJoin():    
    return render_template('hostJoin.html')

@app.route('/hostPlaying')
def hostPlaying():    
    return render_template('hostPlaying.html')

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
    emit('message_from_server', {'text': data['text']}, to=clients[0])

if __name__ == '__main__':
    socketio.run(app, debug=True)