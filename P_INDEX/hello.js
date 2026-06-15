document.addEventListener('DOMContentLoaded', function() {

                document.querySelector('#namequester').onsubmit = () => {
                    const name = document.querySelector('#name').value;
                    const date = document.querySelector('#date').value;
                    alert(`Hello, ${name}! \nToday is ${date}`);
                };
            });