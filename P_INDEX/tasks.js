document.addEventListener('DOMContentLoaded', () => {
    // By default the submit button is disabled
    subbutton = document.querySelector('#submit');
    subbutton.disabled = true;
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value === '') {
            subbutton.disabled = true;
        }else{
        subbutton.disabled = false;
        }
    }
    document.querySelector('#go').onsubmit = function() {
        let task = document.querySelector('#task').value;
        //console.log(task); works as a print in the logs part of the page's console
        
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        subbutton.disabled = true
        document.querySelector('#task').value = "";

        //stop form from submiting
        return false;
    }
});