document.addEventListener('DOMContentLoaded', function() {
                                                    //function(something) {} is the same as (something) => {rest of the code} it doesnt work if there are no equals for some reason
        document.querySelector('select').onchange = function() {
            document.querySelector('#hello').style.color = this.value;
        };
        //This one makes it so all the buttons are selected, you can do this with a bunch of buttons with diferent id's
        document.querySelectorAll('button').forEach((button) => {
            button.onclick = function() {                   // Dataset color is the one in the html file in the button data-color part
                document.querySelector('#hello').style.color = button.dataset.color;
            }
        }); 
        //You made this one, just remember that you need to use .value for inputs and so
        document.querySelector('#submit').onclick = function() {
            document.querySelector('#hello').style.color = document.querySelector('#color').value }
    });