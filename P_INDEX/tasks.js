document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#go').onsubmit = function() {
        const task = document.querySelector('#task').value;
        //console.log(task); works as a print in the logs part of the page's console
        
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        //stop form from submiting
        return false;
    }
});