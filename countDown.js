let x = 10
const timer = setInterval(() => { 
    console.log(x);
    x--;

    if(x<0){
        clearInterval(timer);
        console.log('Timers Up!');
    }
},500)