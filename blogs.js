

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
