/*
var list = document.getElementsByTagName('li');
for(i=0; i<list.length; i++) {
    var span = document.createElement('span');
    var text = document.createTextNode("\u00D7");
    span.appendChild(text);
    span.className = "close";
    list[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for(i=0; i<close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'None';
    }
}


function newTodo() {

    var inputValue = document.getElementById('myInput').value;

    var text = document.createTextNode(inputValue);
    var li = document.createElement('li');
    li.appendChild(text);

    if(inputValue == '') {
        alert('You must write something..')
    } else {
        document.getElementById('myList').appendChild(li);
        document.getElementById('myInput').value = '';
    }

 // document.getElementById('myList').appendChild(li);
 // alert('You clicked me ' + inputValue)
}
*/

/*
function addPost(title, message) {
    var titleName = document.createTextNode(title);
    var label = document.createElement('label');
    label.append(titleName);

    var messagePost = document.createTextNode(message);
    var p = document.createElement('p');
    p.append(messagePost);

    document.getElementById('bloggingPost').appendChild(label);
    document.getElementById('bloggingPost').appendChild(p);

}
*/

/*
function removeAll() {
    //var list = document.getElementById('myList');
    var list = document.getElementsByTagName('ul');
    list[0].innerHTML = "";
}
*/


// Error checking
/*
function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    
    var title = document.contactForm.title.value;
    var message = document.contactForm.message.value;

   var titleError = messageError = true; 
    
    if(title == ""){
        printError("titleError", "Please enter a title");
    }else {
          printError("titleError", "");
          titleError = false;
    }
    

    if(message == ""){
        printError("messageError", "Please enter a message");
    } else {
        printError("messageError", "");
        messageError = false;
    }

    if(titleError || messageError == true){
        return false;
    }else{
        addPost(title, message);
        alert('Thank you. Your message has been sent.');
    }
}
*/











/** Create a close button to each item in the list.. */
/*
var list = document.getElementsByTagName('li');
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement('span');      // <span></span>
    var text = document.createTextNode("\u00D7");   // X
    span.appendChild(text);                         // <span>X</span>
    span.className = "close";
    list[i].appendChild(span);
}
*/

// Click on a close button to hide the current list item.
/*
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'None'
    }
}
*/

/*
function newTodo() {
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    var li = document.createElement('li');      // <li></li>
    li.appendChild(text);                       //<li>Something Here..</li>
    if (inputValue === '') {
        alert('You must write something..')
    } else {
        document.getElementById('myList').appendChild(li);
        document.getElementById('myInput').value = '';
    }

    var span = document.createElement('span');      // <span></span>
    var text = document.createTextNode("\u00D7");   // X
    span.appendChild(text);                         // <span>X</span>
    span.className = "close";
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'None'
        }
    }
}
*/


function newTodo() {
    var inputTitle = document.getElementById('title').value;
    var titleName = document.createTextNode(inputTitle);
    var label = document.createElement('label');
    label.append(titleName);

    var inputMessage = document.getElementById('blogPost').value;
    var messagePost = document.createTextNode(inputMessage);
    var p = document.createElement('p');
    p.append(messagePost);

    if (inputTitle === '') {
        alert('Please enter a title')
    } else if(inputMessage === ''){
        alert('Please enter a message')
    } else {
        document.getElementById('myList').appendChild(label);
        document.getElementById('title').value = '';
        document.getElementById('myList').appendChild(p);
        document.getElementById('blogPost').value = '';
    }

}
