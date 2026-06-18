//initiate a new variable
let counter = 0;
//This is not being called in the program, it is not needed, it is just and example for you baby ;)
//make a new function
function count(command) {
        //count button
        counter++;
        document.querySelector('h1').innerHTML = counter;
        
        if (counter % 10 === 0){
            //pass a varible into a string
            alert(`Count is now ${counter}`);
        }
    }

function calc(input){
    input.value = input.value.replace(/[^Xx+-/0-9]/g, '');
}
    //add event listener helps you make a function without name and then run it when in this case the content of the 
    //whole page is done loading 'DOMContentLoaded'
    //you can also just pass the name of the function like in the second line you can addEventListener pasing ('trigger', and the funtion's name)
document.addEventListener('DOMContentLoaded', function() {
                                    //.addEventListener('onclick', count)
    document.querySelector('#count').onclick = function() {
        counter++;
        document.querySelector('#number').innerHTML = counter;
        if(counter % 10 === 0){
            alert(`Count in now ${counter}`)
        }
    };
    //Reset button
    document.querySelector('#reset').onclick = function() {
        counter = 0;
        document.querySelector('#number').innerHTML = counter;
        alert(`Counter restarted to ${counter}`);
    }
    //Calculator
    const resultDisplay = document.querySelector('#result');
    const formulaInput = document.querySelector('#formula');
    const button = document.querySelectorAll('.calc');
    button.forEach(button => {
        button.addEventListener('click', function(){
            if(this.textContent === '='){
                try{
                    const result = eval(formulaInput.value);
                    formulaInput.value =  `${result}`;
                } catch(error) {
                    formulaInput.value = "Error";
                }
            }
            else{
            formulaInput.value += this.textContent;
            }
        });
    });
});