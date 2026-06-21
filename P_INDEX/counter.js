//initiate a new variable
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
};
//This is not being called in the program, it is not needed, it is just and example for you baby ;)
//make a new function
/* function count(command) {
        //count button
        let counter = localStorage.getItem('counter');
        counter++;
        document.querySelector('h1').innerHTML = counter;
        localStorage.setItem('counter', counter)
        if (counter % 10 === 0){
            //pass a varible into a string
            alert(`Count is now ${counter}`);
        }
    } */
//this is the input normalizer for when the user wants to use the keyboard to type in the calculator
function calc(input){
    input.value = input.value.replace(/[^().%x+-/0-9]/g, '');
}
    //add event listener helps you make a function without name and then run it when in this case the content of the 
    //whole page is done loading 'DOMContentLoaded'
    //you can also just pass the name of the function like in the second line you can addEventListener pasing ('trigger', and the funtion's name)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#number').innerHTML = localStorage.getItem('counter');
                                    //.addEventListener('onclick', count)
    document.querySelector('#count').onclick = function() {
        let counter = localStorage.getItem('counter');
        counter++;
        document.querySelector('#number').innerHTML = counter;
        localStorage.setItem('counter', counter)
        /* if(counter % 10 === 0){
            alert(`Count in now ${counter}`)
        } */
    };
    //Reset button
    document.querySelector('#reset').onclick = function() {
        localStorage.setItem('counter', 0)
        let counter = localStorage.getItem('counter')
        document.querySelector('#number').innerHTML = counter;
        alert(`Counter restarted to ${counter}`);
    };

    //Calculator
    const formulaInput = document.querySelector('#formula');
    const buttonarray = document.querySelectorAll('.calc');
    buttonarray.forEach(button => {
        button.addEventListener('click', function(){
            if (formulaInput.value === 'Error') {
                formulaInput.value = ""
            }
            if(this.textContent === '='){
                try{
                    const result = eval(formulaInput.value);
                    formulaInput.value =  result;
                } catch(error) {
                    formulaInput.value = "Error";
                }
            } else if (this.textContent === 'AC') {
                formulaInput.value = "";
            } else {
                if (this.textContent === "x"){
                    formulaInput.value += "*"
                } else {
                    formulaInput.value += this.textContent;
                }
            }
        });
    });
});