//initiate a new variable
let counter = 0;
//make a new function
function count(command) {
        //count button
        counter++;
        document.querySelector('h1').innerHTML = counter;
        
        if (counter % 10 === 0){
            //pass a varible into a string
            alert(`Count is now ${counter}`)
        }
        
        //reset button
        if (command === 'reset'){
            counter = 0
            document.querySelector('h1').innerHTML = counter;
            alert(`Count restarted to ${counter}`)
        }
    }
    //add event listener helps you make a function without name and then run it when in this case the content of the 
    //whole page is done loading 'DOMContentLoaded'
    //you can also just pass the name of the function like in the second line you can addEventListener pasing ('trigger', and the funtion's name)
    document.addEventListener('DOMContentLoaded', function() {
                                        //.addEventListener('onclick', count)
        document.querySelector('button').onclick = count;
    });