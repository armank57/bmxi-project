//file for all actions a client user can take after selecting a block
//return value is the selectionMode of the user

function test_action() {
    //receive package from server
    data_struct = test_action_server_receive();
    //draw corresponding package
    test_action_draw();
    //send information
    test_action_server_send();
    //btnListeners called in clientPlaying.js
    return 3;
}
function test_action_server_receive() {

}
function test_action_draw() {
    rectMode(CORNER);
    fill("#FFFFFF");
    rect(1, 1, w-2, h-2);
    rectMode(CENTER);
    fill("#121212");
    text("test action function", w/2, h/2);
}
function test_action_server_send() {

}
function test_action_btnListeners() { //called in clientPlaying.js

}