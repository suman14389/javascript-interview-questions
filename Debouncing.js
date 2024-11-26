/* Debouncing is a technique that ensures a function is only executed after a certain period of inactivity. 
 If the event is triggered again within that period, the timer is reset. T
 his is useful for scenarios where you want to wait for a pause in activity before executing a function, 
 such as validating input in a search field or handling window resizing. */
 
 const myButton = document.getElementById('myButton');

 // this debounce function will run one time only, and we have access to timer id the in the returned function
 // because of the closure
 
 function debounce(func, delay) {
     let timerId;
 
     return function(...args){
         clearTimeout(timerId);
         timerId = setTimeout(() => {
             func.apply(this, args)
         }, delay);
     }
 }
 
 const handleButtonClick = () => {
     console.log("something");
 }
 
 const debounceWrapper = debounce(handleButtonClick, 300);
 
 myButton.addEventListener('click', debounceWrapper);