document.addEventListener('DOMContentLoaded', function() {

                document.querySelector('#namequester').onsubmit = function() {
                    const name = document.querySelector('#name').value;
                    alert(`Hello, ${name}!`);
                };
            });