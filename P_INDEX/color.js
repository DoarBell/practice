document.addEventListener('DOMContentLoaded', function() {
                                                    //function(something) {} is the same as (something) => {rest of the code} it doesnt work if there are no equals for some reason
        document.querySelector('select').onchange = function() {
            document.querySelector('#hello').style.color = this.value;
        };

        document.querySelectorAll('button').forEach((button) => {
            button.onclick = function() {
                document.querySelector('#hello').style.color = button.dataset.color;
            }
        }); 
        document.querySelector('#submit').onclick = function() {
            document.querySelector('#hello').style.color = document.querySelector('#color').value
        }
    });