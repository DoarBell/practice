document.addEventListener('DOMContentLoaded', function() {
                                                        //function(something) {} is the same as (something) => {rest of the code}
        document.querySelector('select').onchange = () => {
            document.querySelector('#hello').style.color = this.value;
        }
    });