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
host = ""

# Send HTML!
@app.route('/')
def root():    
    return render_template('clientHostJoin.html')

@app.route('/clientLoading')
def clientLoading():    
    return render_template('clientLoading.html')

@app.route('/clientPlaying')
def clientPlaying():
    if len(clients) >= 4:
        return render_template('clientHostJoin.html')
    return render_template('clientPlaying.html')

@app.route('/hostJoin')
def hostJoin():    
    return render_template('hostJoin.html')

@app.route('/hostPlaying')
def hostPlaying():
    global host
    if host == "":
        return render_template('hostPlaying.html')
    else:
        return render_template('clientHostJoin.html')

@socketio.on('disconnect')
def disconnect():
    global host
    global clients
    sid = request.sid
    if host == sid:
        host == ""
    else:
        clients.remove()
    

# Receive a message from the front end HTML
@socketio.on('send_message')   
def message_recieved(data):
    global host
    text = data['text']
    print(text)

    if text == "newP":
        sid = request.sid
        clients.append(sid)
        player_num = clients.index(sid)
        if player_num <= 3:
            emit('message_from_server', {'text': "@" + str(player_num)}, to=sid)
        return
    elif text == "newH":
        if host == "":
            host = request.sid
        return

    if text[0] == 'H':
        emit('message_from_server', {'text': text}, to=host)
        print(host + "sent")
        return

    elif text[0] == 'C':
        emit('message_from_server', {'text': text}, to=clients[int(text[1])])

if __name__ == '__main__':
    socketio.run(app, debug=True)
