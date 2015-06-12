/**
 * Created by irahavoi on 6/11/2015.
 */
var messagesElement = document.getElementById('messages');
var msgInput = document.getElementById('input');
var usernameInput = document.getElementById('username');
var lastMessageElement = null;

function addMessage(message){
    var newMessageElement = document.createElement('div');
    newMessageElement.setAttribute('class', 'msg');
    var newMessageText = document.createTextNode(message);

    newMessageElement.appendChild(newMessageText);
    messagesElement.appendChild(newMessageElement);
    messagesElement.insertBefore(newMessageElement, lastMessageElement);

    lastMessageElement = newMessageElement;
}



var socket = io.connect('http://localhost:4000');
socket.on('serverMessage', function(content){
    addMessage(content);
});

socket.on('login', function(){
    usernameInput.className = "form-control"; //get rid of 'hidden' class
});

usernameInput.onkeydown = function(keyboardEvent){
    if(keyboardEvent.keyCode == 13 && usernameInput.value){
        socket.emit('login', usernameInput.value);
        usernameInput.className = 'form-control hidden';
        msgInput.className = 'form-control';
    }
}


msgInput.onkeydown = function(keyboardEvent){
    if(keyboardEvent.keyCode === 13){
        socket.emit('clientMessage', msgInput.value);
        msgInput.value = '';
        return false;
    } else{
        return true;
    }
}
