function sendData(data) {
    socket.emit('send_message', { 'text': data });
}

function receiveData(callback) {
    // Message received from server
    socket.on('message_from_server', function (data) {
        var text = data['text'];
        
        // Call the provided callback with the received text
        callback(text);
    });
}
/*
$(document).ready(function () {
    // Button was clicked
    document.getElementById("send_button").onclick = function () {
        // Get the text value
        var text = document.getElementById("textfield_input").value;

        // Update the chat window
        document.getElementById("chat").innerHTML += "You: " + text + "\n\n";

        // Emit a message to the 'send_message' socket
        sendData(text)

        // Set the textfield input to empty
        document.getElementById("textfield_input").value = "";
    }

    // Message received from server
    
    receiveData(function (receivedText) {
    // Now you can use the received text here
    console.log("Received Text: " + receivedText);
    });
});
*/