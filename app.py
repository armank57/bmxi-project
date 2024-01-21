import os
from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS
from flask import request,jsonify
from flask_socketio import SocketIO,emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

clients0 = []
clients1 = []
host0 = ""
host1 = ""

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

@app.route('/clientPlaying')
def clientPlaying0():
    return render_template('clientPlaying.html')

@app.route('/hostJoin')
def hostJoin():
    
    return render_template('hostJoin.html')

@app.route('/hostPlaying')
def hostPlaying():
    return render_template('hostPlaying.html')

@app.route('/hostPlaying0')
def hostPlaying0():
    return render_template('hostPlaying.html')

@socketio.on('disconnect')
def disconnect():
    global host0
    global clients0
    global host1
    global clients1
    sid = request.sid
    print(sid)
    if host0 == sid:
        host0 = ""
    elif host1 == sid:
        host1 = ""
    else:
        for i in clients0:
            if i == sid:
                clients0.remove(sid)

        for i in clients1:
            if i == sid:
                clients1.remove(sid)

    

# Receive a message from the front end HTML
@socketio.on('send_message')   
def message_recieved(data):
    global host0
    global host1
    global clients0
    global clients1
    text = data['text']
    print(text)
    sid = request.sid

    if text == "newP?0":
        if len(clients0) < 4:
            clients0.append(sid)
            emit('message_from_server', {'text': "@" + str(clients0.index(sid)) + "0"}, to=sid)
        else:
            emit('message_from_server', {'text': "E"}, to=sid)
    elif text == "newH?0":
        if host0 == "":
            host0 = request.sid
            emit('message_from_server', {'text': "SH0"}, to=sid)
        else:
            emit('message_from_server', {'text': "E"}, to=sid)

    if text == "newP?1":
        if len(clients1) < 4:
            clients1.append(sid)
            emit('message_from_server', {'text': "@" + str(clients1.index(sid)) + "1"}, to=sid)
        else:
            emit('message_from_server', {'text': "E"}, to=sid)
    elif text == "newH?1":
        if host1 == "":
            host1 = request.sid
            emit('message_from_server', {'text': "SH1"}, to=sid)
        else:
            emit('message_from_server', {'text': "E"}, to=sid)

    elif text[0] == 'H':
        if text[2] == '0':
            emit('message_from_server', {'text': text}, to=host0)
            print(host0 + "sent")
            return
        elif text[2] == '1':
            emit('message_from_server', {'text': text}, to=host1)
            print(host1 + "sent")
            return

    elif text[0] == 'C':
        if text[2] == '0':
            emit('message_from_server', {'text': text}, to=clients0[int(text[1])])
        elif text[2] == '1':
            emit('message_from_server', {'text': text}, to=clients1[int(text[1])])

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    socketio.run(app, host="0.0.0.0", debug=True, allow_unsafe_werkzeug=True, port=port)
