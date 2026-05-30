let x = 10
const timer = setInterval(() => { 
    console.log(x);
    x--;

    if(x<0){
        clearInterval(timer);
        console.log('Timers Up!');
    }
},500)


//generator function to print infinite odd numbers with a 1-second interval,
let i = 1;
const timer2 = setInterval(() => {
    console.log(i);
    i += 2;

    if(i>50){clearInterval(timer2)}
},1000);